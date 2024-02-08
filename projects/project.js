const Projects = [
    {
        name: "RealEstateBrokerApplication",
        about: "Real-Estate-Broker-Application this is Java Backend project in which We have Developed the REST API for Real Estate Broker Application, This Api performs All the basic CRUD operation of our Application with user validation at every step ",
        img: "images/RealEstateBrokerApplication.png",
        gitrepo: "https://github.com/Ashish33000/Real-Estate-Broker_Application",
        tech_stack: "JAVA | MySQL | REST-API | Spring-Boot",
        tech_stackicons: [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

        ],
        project_link: "https://drive.google.com/file/d/1qehbO6ytUFRVWXuCNUazeupLk18PVn62/view",
        project_type: "Team Project",
        category: ["all", "mern"],

    },
    {
        name: "HDFC LIFE",
        about: "Developed a robust document management system for HDFC Life, a leading insurance company. The system streamlined document storage, retrieval, and modification processes, improving operational efficiency and data integrity.",
        img: "images/Hdfc_life.png",
        // gitrepo: "",
        tech_stack: "Java Servlet | JSP | PostgreSQL | DSpace",
        // tech_stackicons: [
        //     `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        //     `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        //     `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

        // ],
        project_link: "https://www.hdfclife.com/",
        project_type: "Team Project",
        category: ["all", "mern"],

    },
    {
        name: "Blue-Fly",
        about: "This project is a clone of an e-commerce website in the US. Bluefly strives to be the store of first resort for fashion by offering the most compelling combination of selection, value, service, and convenience. Tech Stack - Java Script, Html, CSS, Bootstrap.",
        img: "images/BlueFly.png",
        gitrepo: "https://github.com/nagesh2609/Bluefly-Clone",
        tech_stack: "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons: [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`

        ],
        project_link: "https://bright-crostata-57a15c.netlify.app/#",
        project_type: "Group Project",
        category: ["all", "html"],

    },
    {
        name: "YOOX",
        about: "New Arrivals Every Week to Reinvigorate your Wardrobe, Make the Most of it Now. Shop the Latest Designer Savings Now! Secure Payment. A Wide Array of Brands. Expert Customer Care. Categories: Men's Collection, Women's Collection, Kids' Collection.",
        img: "images/YOOX.png",
        gitrepo: "https://github.com/pravin0428/YOOX.com-Clone",
        tech_stack: "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons: [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`

        ],
        project_link: "https://admirable-halva-9f908e.netlify.app/",
        project_type: "Group Project",
        category: ["all", "html"],

    },
    {
        name: "India-Today",
        about: "This project is a clone of the India Today news channel. it is a 24-hour English-language television network based in Noida, Uttar Pradesh that carries news, and current affairs in India.",
        img: "images/IndiaToday.png",
        gitrepo: "https://github.com/nagesh2609/India-Today-Clone",
        tech_stack: "HTML | CSS | JAVASCRIPT",
        tech_stackicons: [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

        ],
        project_link: "https://bright-crostata-57a15c.netlify.app/#",
        project_type: "Team Project",
        category: ["all", "html"],
    }
]

let projects__container = document.getElementById("projects--container")

let all_projects = document.querySelector(".all_projects")

let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
let html_projects = document.querySelector(".html_projects")
all_projects.classList.add("active_tech_project")

all_projects.addEventListener("click", () => {
    filterProjects("all");
    all_projects.classList.add("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})
mern_projects.addEventListener("click", () => {
    filterProjects("mern");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.add("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})

html_projects.addEventListener("click", () => {
    filterProjects("html");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.add("active_tech_project")
})

function filterProjects(basis) {
    let filtered = Projects.filter((el) => {
        return el.category.includes(basis)
    })
    displayProjectData(filtered)
}

function displayProjectData(Projects) {
    projects__container.innerHTML = null;
    Projects.reverse().forEach(pro => {
        let main = document.createElement("div")
        main.setAttribute("class", "portfolio-item padd-15")
        main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
      
    </div>
  </div>
    `
        projects__container.append(main)

    })

}

displayProjectData(Projects);


