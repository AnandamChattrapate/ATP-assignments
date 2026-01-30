// Assignment 3: Application Settings Controller
// Scenario : A web app stores user preferences as settings.

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


    // 1.Toggle theme between "light" and "dark"
    console.log("toggling light ")
    for (let i=0;i<10;i++){
        if (settings.theme==='light'){
            settings.theme='dark'
        }else{
            settings.theme='light'
        }
        console.log(settings)
    }
    // 2. Turn autoSave to true
settings.autoSave=true
    // 3. Remove the notifications setting
delete settings.notifications
console.log(settings)
    // 4. Freeze the settings object so it cannot be modified
Object.freeze(settings)
   
