const sections = document.querySelectorAll('[data-section]'); 
const groups = document.querySelectorAll('[data-group]');
const targets = document.querySelectorAll('[data-target]');
const details = document.querySelectorAll('[data-type]');
const dropdown = document.querySelector('.dropdown');


sections.forEach(section => {
  section.addEventListener("mouseenter" ,() => {
    dropdown.style.display = "flex";
    const name = section.dataset.section + "-side";
    groups.forEach(group => {
      if(group.dataset.group === name){
        group.style.display = "flex";
      } else {
        group.style.display = "none";
      }
    });
    details.forEach(det => det.style.display = "none");
  });
});

targets.forEach(target => {
  target.addEventListener("mouseenter" ,() => {
    const name = target.dataset.target +"-details";
    details.forEach(detail =>{
      if(detail.dataset.type === name){
        detail.style.display = "flex";
      } else {
        detail.style.display = "none";
      }
    });
  });
});

document.querySelector("header").addEventListener("mouseleave", () =>{
  dropdown.style.display = "none";
});
