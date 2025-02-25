const jobs = [
  {
    title: "Software Developer",
    image: "images/softdev.jpg",
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "4",
    link: "#contact",
  },

  {
    title: "Software Tester",
    image: "images/softtest.jpg",
    details:
      "Responsible for Analyze,Prepare,Document,Collect,Create & Perform test cases,system specs, Report defects.",
    openPositions: "3",
    link: "#contact",
  },

  
  {
    title: "Network Engineer",
    image: "images/netengg.jpg",
   
    details:
     " Responsible for  design, maintain, monitor, and repair computer networks & security systems.",
    openPositions: "1",
    link: "#contact",
  },

  {
    title: "Q&A Testing ",
    image: "images/qatest.jpg",
    
   
    details:
      "Responsible for  test and evaluate new and existing programs to identify and help remove bugs, glitches, and other user experience issues.",
    openPositions: "4",
    link: "#contact",
  },

  {
    title: "Desktop Engineer",
    image: "images/desktopengg.jpg",
    details:
      " Responsible for establishing, diagnosing, repairing and maintaining, and upgrading hardware and computer equipment.",
    openPositions: "1",
    link: "#contact",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "Contact Now";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
