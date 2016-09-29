clarkeagencyDB is the back end for TheClarkeAgencyProject

It is build in Express and Node with JWT auth and Knex to connect to a PostgreSQL database.

Using the API:

----------------------------------------
/
----------------------------------------
Will return the response: "Welcome to the default route."

----------------------------------------
/auth
----------------------------------------
/auth/signup POST
  Sign up a new agent. You must provide the following in the req.body:
        username,
        password,
        firstname,
        lastname,
        displayname,
        title,
        phone,
        email,
        pic(URL),
        bio.
____________________
/auth/login POST
  Login existing user. you must provide the following in the req.body:
        username,
        password.




----------------------------------------
/agents
----------------------------------------
/agents GET
  Get all agents.
____________________
/agents/:id GET
  Get single agent.
____________________
/agents/:id PUT
  Update single agent. You must provide the following in the req.body:
        username,
        password,
        firstname,
        lastname,
        displayname,
        title,
        phone,
        email,
        pic,
        bio.
____________________
/agents/:id DELETE
   Delete single agent.
____________________
/agents/resetpassword POST
  Update password You must provide the following in the req.body:
        newPassword.



----------------------------------------
/listings
----------------------------------------
/listings GET
  Get all listings.
____________________
/listings POST
  Post new listing. You must provide the following in the req.body:
        address,
        city,
        state,
        zip,
        price,
        pic (URL),
        description,
        notes.
____________________
/listings/:id GET
  Get single listing
____________________
/listings/:id PUT
  Edit single listing. You must provide the following in the req.body:
        address,
        city,
        state,
        zip,
        price,
        pic (URL),
        description,
        notes.
____________________
/listings/:id DELETE
  Delete a single listing.

----------------------------------------
/resources
----------------------------------------
/resources GET
  Get all resources.
____________________
/resources POST
  Post new resource. You must provide the following in the req.body:
        category,
        subcategory,
        title,
        agent_id,
        text.
____________________
/resources/:id GET
  Get single resource
____________________
/resources/:id PUT
  Edit single resource. You must provide the following in the req.body:
        category,
        subcategory,
        title,
        agent_id,
        text.
____________________
/resources/:id DELETE
  Delete a single resource.
