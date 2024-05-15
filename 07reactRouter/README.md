# package required
> npm i react-router-dom

# Link || NavLink
- We use Link inplace of a tag
- In a tag whole page will reload
- NavLink similar to Link but gives some additional functionalities
- NavLink : className has some functionalites such as isActive 
- className = { ({isActive}) => \`${isActive ? "" : " " }`}
- isActive check whether this page is active or not
- to = "location" to get to that page
