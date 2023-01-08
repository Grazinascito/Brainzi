we can define polymorphism as a bunch of shapes with different properties
![shapes image](../../static/img/shapes.PNG)

It occurs when we have many classes that are related to each other by inheritance.
polymorphism is useful for make the code manageable.

#### example:

![class poly](../../static/img/classpoly.PNG)

#### in terms of code:

```py
class Rectangle():
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height
        self.sides = 4

    #method to calculate Area
    def getArea(self):
        return self.width * self.height

class Circle():
    def __init__(self, radius=0):
        self.radius = radius
        self.sides = 0

    def getArea(self):
        return self.radius * self.radius * 3.142


rectangleShape = Rectangle(5, 15)
circleShape = Circle(8)

print(rectangleShape.getArea())
print(circleShape.getArea())


```

## Method overriding

Method overriding is the process of redefining a parent class's method in a subclass, we can define a method with the same name as a method in its parent class, but with different behavior

```py
#method getArea in the parent class:
    def getArea(self):
        pass

#method getArea in the Child1
    def getArea(self):
        return (self.width * self.height)

#method getArea in the Child2
    def getArea(self):
            return (self.radius * self.radius * 3.142)
```

if a subclass provides a specific implementation of a method that had already been defined in one of its parent classes, it is known as method overriding

## Abstract base classes(ABC)

define a set of methods and porperties that a class must implement in order to be considered a duck-type instance of that class

```py
from abc import ABC, abstractmethod


class Shape(ABC):  # Shape is a child class of ABC
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass


class Square(Shape):
    def __init__(self, length):
        self.length = length


shape = Shape()
# this code will not compile since Shape has abstract methods without
# method definitions in it
```
