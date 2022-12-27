---
sidebar_position: 6
title: encapsulation
---

Encapsulation is a fundamental programming technique used to achieve data hiding in OOP.

#### When encapsulating classes, a good convention is to declare all variables of a class `private`

So, if methods and variables are encapsulated in a class, to use that class from outside, we are going to use methods called **getters** and **setters**

### Get and set

- A `gettter` methods allows reading a property's value
- A `setter` methods allows modifying a property's values

```py
getProperty()
```

```py
setProperty(value)
```

#### lets see a real world application

```py
class User:
    def __init__(self, userName=None, password=None):
        self.userName = userName
        self.password = password

    def login(self, userName, password):
        if ((self.userName.lower() == userName.lower())
                and (self.password == password)):
            print("Access Granted!")
        else:
            print("Invalid Credentials!")


Steve = User("Steve", "12345")
Steve.login("steve", "12345")
Steve.login("steve", "6789")
Steve.password = "6789"
Steve.login("steve", "6789")
```
Note that, in the code above, anyone can access, change, or print the password and userName fields directly from the main code. This is dangerous because there is no encapsulation of the credentials of a user.

#### lets see a good example now:

```py
class User:
    def __init__(self, userName=None, password=None):
        self.__userName = userName
        self.__password = password

    def login(self, userName, password):
        if ((self.__userName.lower() == userName.lower())
                and (self.__password == password)):
            print(
                "Access Granted against username:",
                self.__userName.lower(),
                "and password:",
                self.__password)
        else:
            print("Invalid Credentials!")


# created a new User object and stored the password and username
Steve = User("Steve", "12345")
Steve.login("steve", "12345")  # Grants access because credentials are valid

# does not grant access since the credentails are invalid
Steve.login("steve", "6789")
Steve.__password  # compilation error will occur due to this line
```