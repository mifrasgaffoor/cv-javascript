const  resume = document.createElement("div");
resume.classList.add("resume");
document.querySelector("body").appendChild(resume);


const box1 = document.createElement("div");
resume.appendChild(box1);
box1.classList.add("box1")

const image = document.createElement("img");
image.setAttribute("src","https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png");
image.classList.add("image");

box1.appendChild(image);
const box2 = document.createElement("div");
resume.appendChild(box2);
box2.classList.add("box2");


const box3 = document.createElement("div");
resume.appendChild(box3);
box3.classList.add("box3");


const box5 = document.createElement("div");
resume.appendChild(box5);
box5.classList.add("box5");
box5.textContent="N.Damen Avenue, Chicago |99999 999-999-9999 | helo@kickresume.com | www.kickresume.com"

const box6 = document.createElement("div");
resume.appendChild(box6);
box6.classList.add("box6");

const box4 = document.createElement("div");
box1.appendChild(box4);
box4.classList.add("box4");


const h11 = document.createElement("h1");
box4.appendChild(h11);
h11.innerHTML="BRAIN DUDEY";





const left  = document.createElement("div");
resume.appendChild(left);
left.classList.add("left");
 

const  profile = document.createElement("div");
left.appendChild(profile);
profile.classList.add("profile")



const pic = document.createElement("img");
profile.appendChild(pic);
pic.setAttribute("src" , "https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png")
pic.classList.add("pic")


const h22 = document.createElement("h2");
profile.appendChild(h22);
h22.innerHTML="Profile";


const txt = document.createElement("div");
left.appendChild(txt);
txt.classList.add("txt");

const p = document.createElement("p");
txt.appendChild(p);
p.classList.add("profile__info");
p.innerHTML="Innovative optimized solution seeker.Excited to be at the deployement phase of my new career as a web developer. i am ambtious,adventures, assidoues ,animated , and an alliteration."




const divv1 = document.createElement("div");
left.appendChild(divv1);
divv1.classList.add("profile")
const img2 = document.createElement("img");
divv1.appendChild(img2);
img2.classList.add("pic");
img2.setAttribute("src","https://icon-library.com/images/tuition-icon/tuition-icon-2.jpg")

const  h222 = document.createElement("h2");
divv1.appendChild(h222);
h222.innerHTML="Skills";
h222.classList.add("h22");



const bar = document.createElement("div");
left.appendChild(bar);
bar.classList.add("bar")

const h3 = document.createElement("h3");
bar.appendChild(h3);
h3.classList.add("tec")
h3.innerHTML="Technical Skills"


const skillbox =  document.createElement("div");
bar.appendChild(skillbox);
skillbox.classList.add("skillbox")


const skillname =  document.createElement("div");
skillbox.appendChild(skillname);
skillname.classList.add("skillname")

const p1 = document.createElement("p");
skillname.appendChild(p1);
p1.innerHTML="Javascipt"

const p2 = document.createElement("p");
skillname.appendChild(p2);
p2.innerHTML="HTML"
const p3 = document.createElement("p");
skillname.appendChild(p3);
p3.innerHTML="CSS"

const p4 = document.createElement("p");
skillname.appendChild(p4);
p4.innerHTML="React"

const p5 = document.createElement("p");
skillname.appendChild(p5);
p5.innerHTML="Redux"

const p6 = document.createElement("p");
skillname.appendChild(p6);
p6.innerHTML="Mongodb"


const p7 = document.createElement("p");
skillname.appendChild(p7);
p7.innerHTML="Deployment"


const skillrange = document.createElement("div");
skillbox.appendChild(skillrange);
skillrange.classList.add('skillrange')

 const range = document.createElement("INPUT");
  range.setAttribute("type", "range");   
  skillrange.appendChild(range)

  const range1 = document.createElement("INPUT");
  range1.setAttribute("type", "range");
  skillrange.appendChild(range1)

  const range2 = document.createElement("INPUT");
  range2.setAttribute("type", "range");
  skillrange.appendChild(range2)

  const range3 = document.createElement("INPUT");
  range3.setAttribute("type", "range");
  skillrange.appendChild(range3)

  const range4 = document.createElement("INPUT");
  range4.setAttribute("type", "range");
  skillrange.appendChild(range4)

  const range5 = document.createElement("INPUT");
  range5.setAttribute("type", "range");
  skillrange.appendChild(range5)

  const range6 = document.createElement("INPUT");
  range6.setAttribute("type", "range");
  skillrange.appendChild(range6)


   const bar1 = document.createElement("div");
   left.appendChild(bar1);
   bar1.classList.add("bar")
  
   const h33 = document.createElement("h3");
   bar1.appendChild(h33);
  h33.classList.add("tec")
   h33.innerHTML="Technical Skills"
  
  
   const skillbox1 =  document.createElement("div");
   bar1.appendChild(skillbox1);
   skillbox1.classList.add("skillbox")
  
   const skillname1 =  document.createElement("div");
   skillbox1.appendChild(skillname1);
   skillname1.classList.add("skillname2")
   
   const p01 = document.createElement("p");
   skillname1.appendChild(p01);
   p01.innerHTML="Project Managment"
   
    const p02 = document.createElement("p");
   skillname1.appendChild(p02);
    p02.innerHTML="Requirment"


    const p03 = document.createElement("p");
    skillname1.appendChild(p03);
    p03.innerHTML="Businuss Develpment"
   
   const p04 = document.createElement("p");
  skillname1.appendChild(p04);
   p04.innerHTML="Editing"


   const skillrange2 = document.createElement("div");
   skillbox1.appendChild(skillrange2);
   skillrange2.classList.add('skillrange2')
   
    const range01 = document.createElement("INPUT");
     range01.setAttribute("type", "range");
     skillrange2.appendChild(range01)
   
     const range02 = document.createElement("INPUT");
     range02.setAttribute("type", "range");
     skillrange2.appendChild(range02)
   
     const range03 = document.createElement("INPUT");
     range03.setAttribute( "type", "range" , "disabled" );
     skillrange2.appendChild(range03)
   
     const range04 = document.createElement("INPUT");
     range04.setAttribute("type", "range");
     skillrange2.appendChild(range04)






 const profile2 = document.createElement("div");
 left.appendChild(profile2);
 profile2.classList.add("profile");


 const img3 = document.createElement("img");
 profile2.appendChild(img3);
 img3.setAttribute("src" , "https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo2-29-512.png");
 img3.classList.add("pic")


  
const  h2222 = document.createElement("h2");
profile2.appendChild(h2222);
h2222.innerHTML="Work Experince";
h2222.classList.add("h22");


const txt1 =  document.createElement("div");
left.appendChild(txt1);
txt1.classList.add("txt1");

  const job =  document.createElement("h5");
  job.innerHTML="Event Manager"
  txt1.appendChild(job);
  

const date =  document.createElement("p");
txt1.appendChild(date);
date.innerHTML="06/2011-01/2014"
date.classList.add("date");


const txt2 =  document.createElement("p");
left.appendChild(txt2);
txt2.innerHTML="C3 Present,s Wash in gt on DC"
txt2.classList.add("txt2")




const ull = document.createElement("ul");
left.appendChild(ull);

const  li1 = document.createElement("li");
ull.appendChild(li1);
li1.innerHTML="Lead and exicute all phaseses of event planning and production spanning committee recuirmenr, tarining, vendor relationships and on-site faciliation."

const  li2 = document.createElement("li");
ull.appendChild(li2); 
li2.innerHTML="Brought new businuess to the organaization throuth relentless networking and stewardtion which helped the company win the bid for the state Develpment summit on the Middle East and, the campanies  largets civic event to date, the united state of Women."



const  li3 = document.createElement("li");
ull.appendChild(li3); 
li3.innerHTML=" Exercise fiscal control over budget creation, tracking and reporting.Collaborate with employees at all organaizational levels   to advance cohesive operations"


const right  = document.createElement("div");
resume.appendChild(right);
right.classList.add("right")

const profile3 = document.createElement("div");
right.appendChild(profile3);
profile3.classList.add("profile")

const img4 = document.createElement("img");
profile3.appendChild(img4);
img4.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo2-29-512.png");
img4.classList.add("pic")

const h2h2 = document.createElement("h2");
profile3.appendChild(h2h2);
h2h2.innerHTML="Work Expereince"



const txt1txt1 = document.createElement("div");
right.appendChild(txt1txt1);
txt1txt1.classList.add("txt1");

const job1 = document.createElement("p");
txt1txt1.appendChild(job1);
job1.innerHTML="Community Relation <br /> Manager"
job1.classList.add("job")


const date11 = document.createElement("p");
txt1txt1.appendChild(date11);
date11.innerHTML="&nbsp; &nbsp; &nbsp; 06/2011-01/2014"
date11.classList.add("date")


const text =  document.createElement("h5");
right.appendChild(text);
text.innerHTML="Gay & Lesbian Elder Housing,Los Angels"



const ul = document.createElement("ul");
right.appendChild(ul);

const  li = document.createElement("li");
ul.appendChild(li);
li.innerHTML="Arranging presanatation and pitch desck."

const  li11 = document.createElement("li");
ul.appendChild(li11);
li11.innerHTML="Desiging a PR plan and establishing important focaus."

const  li22 = document.createElement("li");
ul.appendChild(li22);
li22.innerHTML="Desiging, creating and managing content acroos <br /> multiple communication platform."


const  li33 = document.createElement("li");
ul.appendChild(li33);
li33.innerHTML="Buliding relationship with keymedia players."





const profile5 = document.createElement("div");
right.appendChild(profile5);
profile5.classList.add("profile")

 const img5 = document.createElement("img");
 profile5.appendChild(img5);
img5.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo2-29-512.png");
 img5.classList.add("pic")

  const h2h2h2 = document.createElement("h2");
profile5.appendChild(h2h2h2);
 h2h2h2.innerHTML="Education"


 const txt1txt11 = document.createElement("div");
 right.appendChild(txt1txt11);
 txt1txt11.classList.add("txt1");
 
const jobjob = document.createElement("p");
txt1txt11.appendChild(jobjob);
jobjob.innerHTML=" Engineering Immersion <br /> Program"
jobjob.classList.add("job")


 const date111 = document.createElement("p");
 txt1txt11.appendChild(date111);
 date111.innerHTML="&nbsp; &nbsp; &nbsp; 06/2011-01/2014"
 date111.classList.add("date")


const textt =  document.createElement("h5");
right.appendChild(text);
textt.innerHTML="Thinkful, Chicago ,IL"


const ulul = document.createElement("ul");
right.appendChild(ulul);

const  lione = document.createElement("li");
ulul.appendChild(lione);
lione.innerHTML="Developed a full-stack web application, Renew U, using React that allows usesrs to explore varius aspect of mediatioan. Usesr's  progress is stored on a backend created using Node and MongoDB."


const  litwo = document.createElement("li");
ulul.appendChild(litwo);
litwo.innerHTML=" Developed a language learning app Foodie, Phonestics using spaced repetition and to create the fornt end components while node and Mongo were used to create a backend that stores user data."


const  lithree = document.createElement("li");
ulul.appendChild(lithree);
lithree.innerHTML="Developed a concirege app , Pley, for indiduals looking for curated suggestions when visiting a new place. React was used to  develop the front end which includes real-time chat, drag and drop and varaity of advanced features. The backend built usinf Node,  Express, and mongoDB takes advantages of well- developed RESTful  API, Geograptail searching and user authendication with JWT."



const t = document.createElement("div");
right.appendChild(t);
t.classList.add("txt1");

const jobjob1 = document.createElement("p");
t.appendChild(jobjob1);
jobjob1.innerHTML="BA English"
jobjob1.classList.add("job")


const date112 = document.createElement("p");
t.appendChild(date112);
date112.innerHTML="&nbsp; &nbsp; &nbsp; 06/2011-01/2014"
date112.classList.add("date")


