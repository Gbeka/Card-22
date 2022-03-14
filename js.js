fetch("https://api.github.com/users/takeo")
    .then((res)=>{
        return res.json();
    })
    .then((user)=>{
        const output=document.createElement("div");
        output.className="output";
        
         const frame=document.createElement("div")
         frame.className="frame";

         const photo=document.createElement("img")
         photo.className="photo";
         photo.setAttribute("src", user.avatar_url)
         frame.appendChild(photo);

         const login=document.createElement("div")
         login.classList="login";
         login.innerHTML=`Login: ${user.login}`;
         frame.appendChild(login);

         const name=document.createElement("div")
         name.classList="name";
         name.innerHTML=`Name: ${user.name}`;
         frame.appendChild(name);

         const vizitUser=document.createElement("a")
         vizitUser.classList="vizitUser";
         vizitUser.innerHTML="Vizit account";
         vizitUser.setAttribute("href", user.html_url)
         frame.appendChild(vizitUser);

        output.appendChild(frame);
        console.log(output);
        document.getElementById("container").appendChild(output);
        })


    

    
 

