import os
import requests
import psycopg2

# Set up database connection
DB_NAME = os.environ.get("DB_NAME")
DB_USER = os.environ.get("DB_USER")
DB_PASSWORD = os.environ.get("DB_PASSWORD")
DB_HOST = os.environ.get("DB_HOST")
DB_PORT = os.environ.get("DB_PORT")

conn = psycopg2.connect(
    dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT
)

# Set up GitHub API connection
headers = {"Accept": "application/vnd.github.v3+json"}


# Function to retrieve public repositories for a given GitHub username
def get_public_repos(username):
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None


# Function to store repository data in database
def store_repo_data(username, repos):
    with conn:
        with conn.cursor() as cur:
            for repo in repos:
                cur.execute(
                    "INSERT INTO githubuser (username, repository) VALUES (%s, %s)",
                    (username, repo["name"]),
                )


def getUserData(username):
    repos = get_public_repos(username)
    if repos:
        store_repo_data(username, repos)
        print("Repository data stored in database.")
    else:
        print("Failed to retrieve repository data.")


# Main function to retrieve and store repository data for a given GitHub username
def main():
    getUserData("Maha41")
    getUserData("torvalds")


if __name__ == "__main__":
    main()
