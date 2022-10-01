# CSS Notes

## 3 Ways to Insert CSS
  
* External
* Internal (overrules external)
* Inline (overrules internal)
  
---

## Anatomy of CSS rules

* `selector {property: value;}` <-- This is a rule
* The `property: value;` combo is called a declaration.
  * You can have multiple declarations inside each CSS rule

Example:

```CSS
footer {background-color: blue; color: white;}
```

You'll more commonly see it as:

```CSS
footer {
  background-color: blue;
  color: white;
}
```

---

## Selecting HTML multiple ways

* By HTML element name
  * `p {}` : will select all paragraph tags
* By ID
  * `#id-name {}` : will select the element with the `id` value `"id-name"`
* By class  
  * `.lower` : will select all elements with the `class` value `"lower"`
