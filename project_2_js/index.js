// dummy data for making multiple card . 
/*const posts =[
    {
        title : " this is title1",
        body: "this is body1 "
    },
    {
        title : " this is title2",
        body: "this is body2 "
    },
    {
        title : " this is title3",
        body: "this is body3 "
    },
    {
        title : " this is title4",
        body: "this is body4"
    },
    {
        title : " this is title5",
        body: "this is body5 "
    },
    {
        title : " this is title6",
        body: "this is body6 "
    },
];*/
/*        <div class="post">
            <h4 class="post-title"> post-title
            </h4>
            <p class="post-body"> post description 1</p>

        </div>*/
        //fetch data
        const fecthData = async(config) =>{
                try{
                    const res = await axios(config);
                    console.log(res.data);
                return res.data;
                }

             catch (error){
                throw Error(" Data is not fecthed")
         };
         }; 
    
        //selection
        const postsElement = document.querySelector(".posts");
        const loadAllData= async() =>{
            const posts = await fecthData("https://jsonplaceholder.typicode.com/posts");
posts.map((post) =>
{
const postElement = document.createElement("div");
postElement.classList.add("post");
postElement.innerHTML=`
<h4 class="post-title"> ${post.title}</h4>
<p class="post-body"> ${post.body}</p>`;
postsElement.appendChild(postElement);
});
        };
        loadAllData();