---
sidebar_position: 3
title: methods in class
---

## purpose of methods

There are three types of methods in Python

- instance methods
- class methods
- static methods

instance methods are used the most in python

### why methods?

A method is a group of statements that perfoms some operations and may or may not return a result.

Methods can alter the content of the properties or use their value to perform a particular computation.

#### one of the major differences between functions and methods in python is the first argument in the method definition

It is normally named `self`

example of implementing methods in a class:

```py
 class Employee:
    def __init__(self, ID=None, salary=None, department= None):
        self.ID = ID
        self.salary = salary
        self.department = department

    def tax(self):
        return(self.salary * 0.02)
    def salaryPerDay(self):
        return(self.salary / 30)

Grazi = Employee(84, 3000, "software")

print(Grazi.tax()) #60.0

```

### Method overloading

Method overloading refers to the ability of a class to define multiple methods with the same name, but different signatures.

`example`:

```py
class MyClass:
    def greet(self, name='world'):
        print(f'Hello, {name}!')

obj = MyClass()
obj.greet()       # prints "Hello, world!"
obj.greet('Alice') # prints "Hello, Alice!"
```

#### why use method overloading?

Overloading saves us memory in the system. Create new mthod is costlier compared to overloading a single one.
Futhermore, the code becomes simple and clean. Method overloading is also very important to Polymorphism concept

#### in a nutshell:

Overloading

- Increases execution speed
- makes code cleaner
- allows the implementation of polymorphism
- same method name saves memory

## Class methods

there are 3 types methods in python:

- Instance -> we already talk about it before
- class methods
- static methods

**Class methods** work with class variables and are accessible using the class name rather than its object.

#### syntax

```py
# we use the decorator `@classmethod.cls`

class MyClass:
    classVariable = "educative"

    @classmethod
    def demo(cls):
        return cls.classVariable
```

another example:

```py
class Player:
    teamName = 'Liverpool'  # class variables

    def __init__(self, name):
        self.name = name  # creating instance variables

    @classmethod
    def getTeamName(cls):
        return cls.teamName


print(Player.getTeamName())
```

#### reference: 
https://www.youtube.com/watch?v=nLhj3aihF7c