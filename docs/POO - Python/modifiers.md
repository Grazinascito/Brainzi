---
sidebar_position: 4
title: modifiers
---

## Access modifiers

Access modifiers are tags we can associate with each member to define which parts of the program can access it directly. There are two types of access modifiers in Python:

* Public attributes
* Private attributes

public attributes can be accessed inside and outside the class
by default, all methods and properties in a class are public

`example`:

```py
class Employee:
    def __init__(self, ID, salary):
        # all properties are public
        self.ID = ID
        self.salary = salary

    def displayID(self):
        print("ID:", self.ID)


Steve = Employee(3789, 2500)
Steve.displayID()
print(Steve.salary)
```

### Private attributes

cannot be accessed directly from outside the class, only from inside the class
the aim is to keep it hidden from the other classes

#### to make members private we use the double underscore `__` prefix

```py
class Employee:
    def __init__(self, ID, salary):
        self.ID = ID
        self.__salary = salary  # salary is a private property
```

if we try to access a private property outside the class, it will throw an error 

