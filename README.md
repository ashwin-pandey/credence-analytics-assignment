# credence-analytics-assignment

## APIs

---

### GET - Get All Movies

```
http://localhost:4000/movies
```

**Response**

```JSON
[
    {
        "_id": "61ba4961efc9a9b33d776eaf",
        "name": "test movie 2",
        "description": "this is a test movie 2.",
        "yearOfRelease": 2020,
        "image": null,
        "numberOfAwards": 0,
        "createdDate": "2021-12-22T20:00:33.852Z",
        "modifiedDate": "2021-12-22T20:00:33.853Z",
        "__v": 0
    },
    {
        "_id": "61baf7059d4e110558f06c89",
        "name": "test movie 4",
        "description": "this is a test movie 4.",
        "yearOfRelease": 2020,
        "image": null,
        "numberOfAwards": 0,
        "createdDate": "2021-12-23T08:21:25.823Z",
        "modifiedDate": "2021-12-23T08:21:25.823Z",
        "__v": 0
    }
]
```

---

### GET - Get Specific Movie

```
http://localhost:4000/movies/{id}
```

**Response**

```JSON
{
    "_id": "61ba4961efc9a9b33d776eaf",
    "name": "test movie 2",
    "description": "this is a test movie 2.",
    "yearOfRelease": 2020,
    "image": null,
    "numberOfAwards": 0,
    "createdDate": "2021-12-22T20:00:33.852Z",
    "modifiedDate": "2021-12-22T20:00:33.853Z",
    "__v": 0
}
```

---

### POST - Create a new movie

```
http://localhost:4000/movies
```

**Request**

```JSON
{
    "name": "test movie 4",
    "description": "this is a test movie 4.",
    "yearOfRelease": 2020,
    "numberOfAwards": 0,
}
```

**Response**

```JSON
{
    "_id": "61ba4961efc9a9b33d776eaf",
    "name": "test movie 2",
    "description": "this is a test movie 2.",
    "yearOfRelease": 2020,
    "image": null,
    "numberOfAwards": 0,
    "createdDate": "2021-12-22T20:00:33.852Z",
    "modifiedDate": "2021-12-22T20:00:33.853Z",
    "__v": 0
}
```

---

### PATCH - Patch a specific movie

```
http://localhost:4000/movies/{id}
```

**Request**

```JSON
{
    "name": "test movie 2 updated"
}
```

**Response**

```JSON
{
    "_id": "61ba4961efc9a9b33d776eaf",
    "name": "test movie 2 updated",
    "description": "this is a test movie 2.",
    "yearOfRelease": 2020,
    "image": null,
    "numberOfAwards": 0,
    "createdDate": "2021-12-22T20:00:33.852Z",
    "modifiedDate": "2021-12-22T20:00:33.853Z",
    "__v": 0
}
```

---

### DELETE - Delete a specific movie

```
http://localhost:4000/movies/{id}
```

**Response**

Status code - 204 (No Content)
