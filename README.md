# Drawing board backend 2023

## end point:

### `/draw/login`

auth : none
### subpath : 

>#### `/` method : get : here is login root, will return a string.
>#### `/` method : post : login, will return a username in string if you given a string as input.
>#### `/` method : delete : logout, will remove the user-session relation in users table, also the req.session will be clean.


### `/draw/all`
auth : none
### subpath :
>#### `/` method : get : return lastest ten drawings.

### `/draw`
auth : login required
### subpath : 
>#### `/uploaddrawing` method : post : create drawing.
>#### `/uploaddrawing/:id` method : delete : delete drawing, no really delete, just mark deleted.
>#### `/uploaddrawing/:id` method : put : update drawing.
>#### `/drawings` method : get : get all drawings under username.
>#### `*` method : get : return a string.

### `*` method : get : 404 response.
