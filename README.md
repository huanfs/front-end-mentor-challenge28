# time tracking dashboard
---
## layout
* inside a *#root* div we have two components, one for profile, and other for stats cards, the #root have and display flex on mobile screens and a display grid on desktop screens, these two components have their self styles and *@media* queryes controls then and the #root div.
* in desktop screens *Profile_card* in directly inside of #root, but *Stats_card* is inside a div with `display:grid` to align the cards in same size.
* otherwhise, in mobile screens both *Profile_card* and *Stats_card* is inside os #root directly, and this #root have `display:flex; flex-direction:column` to align the *Stats_card* one of top of the other
---
### code operation
* in this project we have 2 components  *Profile_card* and *Stats_card* responsible for a profile component with a ~~profile image~~, ~~profile name and job~~, and one div with 3 *P* tags responsible for starts a function `changePeriod()` storing the target item `innerHTML` of function in a state. Depending on the value, shows the informations from ~~daily, weekly or monthly~~ ammount