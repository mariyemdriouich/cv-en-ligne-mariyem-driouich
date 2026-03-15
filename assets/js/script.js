const STUDENT_PROFILE = {
  name: "Mariyem Driouich",
  title: "Digital Marketing & UX Student",
  birthDate: "18/07/2006",
  phone: "0626711325",
  email: "mariyem.driouich.94@edu.uiz.ac.ma",
  location: "Dakhla, Morocco",
  github: "https://github.com/mariyemdriouich",
  linkedin: "https://www.linkedin.com/in/maryam-adriouiche-9920413b6",
  shortProfile: "Je suis étudiante intéressée par le marketing digital, le design UX et le développement web. Je développe mes compétences à travers différents projets académiques et pratiques. Mon objectif est d’acquérir de l’expérience et d’approfondir mes connaissances dans le domaine du numérique."
};

document.addEventListener("DOMContentLoaded", () => {
  // Populate text content
  document.getElementById("profile-name").textContent = STUDENT_PROFILE.name;
  document.getElementById("profile-title").textContent = STUDENT_PROFILE.title;
  document.getElementById("about-text").textContent = STUDENT_PROFILE.shortProfile;
  document.getElementById("contact-email").textContent = STUDENT_PROFILE.email;
  document.getElementById("contact-email").href = "mailto:" + STUDENT_PROFILE.email;
  document.getElementById("contact-phone").textContent = STUDENT_PROFILE.phone;
  document.getElementById("contact-location").textContent = STUDENT_PROFILE.location;

  // Populate links
  if (document.getElementById("nav-github")) document.getElementById("nav-github").href = STUDENT_PROFILE.github;
  if (document.getElementById("nav-linkedin")) document.getElementById("nav-linkedin").href = STUDENT_PROFILE.linkedin;
  if (document.getElementById("footer-github")) document.getElementById("footer-github").href = STUDENT_PROFILE.github;
  if (document.getElementById("footer-linkedin")) document.getElementById("footer-linkedin").href = STUDENT_PROFILE.linkedin;
});
