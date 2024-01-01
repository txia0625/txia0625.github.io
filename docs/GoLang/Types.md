# Data Types

## Intro
Well, this is the first day of my Golang learning. I spent 1 - 2 hours on this topic. I'm just share some interesting features of Golang types and my thoughts. Happy Coding!

### Golang is a statically typed programming langauge.

Statically typed programming language means that the type of a variable is known at **compile time** . (In contrast to dynamic typing language.) 

The key features of a static typed programming language are:
1. **Explicit Type Declaration**.(note: i'm not sure about this one for Golang, because Golang can infer type by using ':=' operator)

2. **Compile-Time Type Checking**

3. **Type Safety**, this is quite obvious because we can catch type kind of errors during the compile time. 

Both of Java and C++ use statically typing, think about it if these three features are true for both languages.

Large projects often require statically typed languages. Because they provide early error detection as we discussed before, code maintainability, performance optimization and scalability.

#### Code Maintainability

Statically typed languages provide a clear and explicit interface for functions and classes, making it easier for developers to understand and maintain the codebase. This is especially important in large projects where multiple developers are collaborating, and the codebase is constantly evolving.

#### Performance Optimization 

Statically typed languages often allow for more aggressive compiler optimizations because the compiler has a better understanding of the program's structure and types. This can lead to better runtime performance, which is crucial for large-scale applications where efficiency is a priority.

#### Scalability
 
The type system provides a level of structure that facilitates the management and organization of large codebases. This becomes crucial as projects grow in complexity and size.

By the way, Golang has a strong type system. It does not allow mix numeric types in a statement.

For example:
```
//this is not allowed
var a int = 2
var b float = 3.0
var res int

res = a/b
//it only allowed when res = a, b, res are all the same 
//type.
```


Ok, then let's dive in the first interesting part of Golang - **Data Types**.

## Basic Types

I won't spend too much time for every basic type as I assumed readers have some programming experience and these are very self-explanatory.

### Integers

#### Signed
- int
- int8
- int16
- int32
- int64

#### Unsigned
- uint
- uint8
- uint16
- uint32
- uint64
- uintptr

These are all integer types. The number follows int/uint are bits it occupies. 
#### 1. int and uint
```int``` and ```uint``` are platform dependent. It means if you run on a 32-bit platform, these two types will take 32 bit which is 4 bytes. If you run on a 64-bit, then these two types will take 64 bit which is 8 bytes. 

The difference between ```int``` and ```uint```
- ```int``` are half for the negative, half for the positive. Range is [-2^n, 2^n - 1]. note: -1 because we have zero.
- ```uint``` are all for >= 0 values.

#### 2.uintptr

```uintptr``` is a pointer. It can be used to access memory. 

This is also platform dependent like we discussed above.

    It means if you run on a 32-bit platform, these two types will take 32 bit which is 4 bytes. If you run on a 64-bit, then these two types will take 64 bit which is 8 bytes.


