# Socially Awkward API

This is a simple API for a social media app.

- Information about the API

```http
GET /api/v1/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "data": {
    "name": "Socially Awkward API",
    "description": "A simple API for a social media app",
    "version": "0.0.1",
    "author": "@devlulcas",
    "license": "MIT"
  }
}
```

## Authentication

- Register a new user

```http
POST /api/v1/auth/sign-up/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Accept: application/json
Content-Type: application/json

{
  "username": "johndoe",
  "email": "johndoe@test.com",
  "password": "password"
}
````

```http
HTTP/1.1 201 Created
Content-Type: application/json
Set-Cookie: token=jwt_token; Path=/; HttpOnly; Secure

{
	"data": {
		"payload": {
			"username": "johndoe",
			"sub": "eeb9f55a-d858-4e49-929a-58ce5d48c15d"
		},
		"token": "jwt"
	}
}
```

- Login a user

```http
POST /api/v1/auth/sign-in/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Accept: application/json
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: token=jwt_token; Path=/; HttpOnly; Secure

{
	"data": {
		"payload": {
			"username": "johndoe",
			"sub": "eeb9f55a-d858-4e49-929a-58ce5d48c15d"
		},
		"token": "jwt"
	}
}
```

- Logout a user

```http
POST /api/v1/auth/sign-out/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
```

```http
HTTP/1.1 204 No Content
Content-Type: application/json
Set-Cookie: token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure
```

## Users

- Get current user

```http
GET /api/v1/users/me/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
	"data": {
		"id": "6444ac0a988c82b67edd7cf5",
		"username": "johndoe",
		"email": "johndoe@test.com"
	}
}
```

## Posts

- Get the list of posts

```http
GET /api/v1/posts/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
	"data": [
		{
			"id": "ad9ab482-de7d-4fd4-b22f-9fba89d442f0",
			"title": "My first post",
			"content": "This is my first post",
			"likes": 0,
			"createdAt": "2023-04-23T05:07:38.502Z",
			"updatedAt": "2023-04-23T05:07:38.502Z"
		},
		{
			"id": "3ce554e2-dbe7-4420-8a17-727c8570abf3",
			"title": "My second post",
			"content": "This is my second post",
			"likes": 0,
			"createdAt": "2023-04-23T05:16:28.692Z",
			"updatedAt": "2023-04-23T05:16:28.692Z"
		}
	]
}
```

- Get a specific post

```http
GET /api/v1/posts/1/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
	"data": {
		"id": "ad9ab482-de7d-4fd4-b22f-9fba89d442f0",
		"title": "My first post",
		"content": "This is my first post",
		"likes": 0,
		"createdAt": "2023-04-23T05:07:38.502Z",
		"updatedAt": "2023-04-23T05:07:38.502Z"
	},
}
```

- Create a new post

```http
POST /api/v1/posts/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
Content-Type: application/json

{
  "title": "My first post",
  "content": "This is my first post"
}
```

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
	"data": {
		"id": "c3e23547-bde4-463c-8673-91f1bdf30e70",
		"authorId": "eeb9f55a-d858-4e49-929a-58ce5d48c15d",
		"title": "This is my first post",
		"content": "This is my first post",
		"likes": 0,
		"createdAt": "2023-04-23T13:59:17.503Z",
		"updatedAt": "2023-04-23T13:59:17.503Z"
	}
}
```

- Delete a post

```http
DELETE /api/v1/posts/1/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
```

```http
HTTP/1.1 204 No Content
```

## Likes

- Give a like to a post

```http
POST /api/v1/posts/c3e23547-bde4-463c-8673-91f1bdf30e70/like HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
	"data": {
		"id": "c3e23547-bde4-463c-8673-91f1bdf30e70",
		"title": "This is my first post",
		"content": "This is my first post",
		"likes": 1,
		"createdAt": "2023-04-23T13:59:17.503Z",
		"updatedAt": "2023-04-23T14:01:15.356Z"
	}
}
```

- Remove a like from a post

```http
DELETE /api/v1/posts/c3e23547-bde4-463c-8673-91f1bdf30e70/like HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
	"data": {
		"id": "c3e23547-bde4-463c-8673-91f1bdf30e70",
		"title": "This is my first post",
		"content": "This is my first post",
		"likes": 0,
		"createdAt": "2023-04-23T13:59:17.503Z",
		"updatedAt": "2023-04-23T14:01:15.356Z"
	}
}
```

> warning: WIP

## Comments

- Get the list of comments

```http
GET /api/v1/comments/1/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  data: [
    {
      "id": 1,
      "content": "This is my first comment",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z"
    },
    {
      "id": 2,
      "content": "This is my second comment",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z"
    }
  ]
}
```

- Create a new comment

```http
POST /api/v1/comments/1/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
Content-Type: application/json

{
  "content": "This is my first comment on post 1"
}
```

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  data: {
    "id": 1,
    "content": "This is my first comment on post 1",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  }
}
```

- Delete a comment

```http
DELETE /api/v1/comments/1/ HTTP/1.1
Host: https://api.socially-awkward.localhost/
Cookie: token=jwt_token
Accept: application/json
```

```http
HTTP/1.1 204 No Content
```

