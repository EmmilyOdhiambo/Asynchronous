//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.
async function msgDelayTime(message,delay){
    await new Promise(resolve=>setTimeout(resolve,delay));
    console.log(message)
}
msgDelayTime("I am learning Javascript",5000)


//You have an array of user IDs and a function getUserData(id) that returns a Promise with user
//data when given a user ID. Write an asynchronous function that fetches and logs the data
//for each user ID one by one, in sequence.
const idNo = ["1A","2B","3C","4D"]
function userData(id){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const userData = { id,name: 'User ${id}'};
            resolve (userData);

        }, 7000);
    });
}
async function fetchUserData(){
    for (const id of userIds){
        try{
            const userData = await userData(id);
            console.log(userData);
        }catch(error) { 
            console.log("that an error ID ${id}:",error)
        }
    }

}
fetchUserData();



//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is
// successful and rejects if there's an error. Write a function that calls performTask() and logs a custom
// success message if the task is successful, and a custom error message if there's an error.
function taskPerformed (){
    performTask ()
    .then(()=>{
        console.log("successfully archieved");

    })
    .catch(error=>{
        console.log("not successfully archieved",error);

    });
}
function performTask(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },5000);
    });
}
taskPerformed();

