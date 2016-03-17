# Treehouse Techdegree

<h1>Project3</h1>
retooled workflow so that my dev env tools not included in repo<br>

live preview: http://leyes.ca/project3

https://validator.w3.org/nu/?doc=http%3A%2F%2Fleyes.ca%2Fproject3%2F
- html validation clean

https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fleyes.ca%2Fproject3%2F&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en#css
- 3 errors listed, 3 error all relate to my heading which uses unsupported techniques to achieve the effect.
I have provided a suitable fallback for unsupported browsers.

The included Javascript is only in place to detect that something has been entered in to the field and changes the background green if not null onblur.<br>I am relying on HTML5 with the inclusion of patterns to handle validation where necessary.
I decided in the interest of time not to handle checking if radio buttons and checkboxes have been selected/checked.
