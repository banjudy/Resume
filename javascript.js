// Menu links
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getProjects = document.getElementById("getProjects");
let getContact = document.getElementById("getContact");

// Sections
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");

function switchLang(lang) {
    for (let key in languageContent[lang]) {
		document.getElementById(key).innerHTML = languageContent[lang][key];
    }
}
	  
function removeClass() {
    // Links
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
	getProjects.classList.remove('selected');
    getContact.classList.remove('selected');
    // Sections
    about.classList.remove('view');
    resume.classList.remove('view');
	projects.classList.remove('view');
    contact.classList.remove('view');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getProjects.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        projects.classList.add('view');
        getProjects.classList.add('selected');
    }
})

getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})

let languageContent = {
    "en": {
		"profession": "Software Developer",
		"aboutme": "About me",
		"myresume": "Resume",
		"myprojects": "Projects",
		"mycontact": "Contact",
		"downloadCV": "DOWNLOAD CV <i class='fas fa-download'></i>",
		"sendemail": "SEND EMAIL <i class='fas fa-reply'></i>",
		"aboutaboutme": "About me",
		"skills": "Languages & Skills",
		"aboutmetext": "<p>My growth mindset has urged me to live in three different continents that has flourished both my professional and personal capabilities. As a software developer transitioning into software testing, my technical expertise and attention to detail allow me to bring a unique perspective to ensure the quality and user satisfaction of applications.<br><br> One of the reasons I am drawn to software testing is the opportunity it provides to collaborate with cross-functional teams, including developers, product managers, and other stakeholders. I strongly believe in the power of teamwork and effective communication. By working together, we can identify potential issues early on, provide valuable feedback, and deliver exceptional software that exceeds customer expectations.</p>",
		"languages": "<i class='fas fa-tv'></i> LANGUAGES",
		"english": "English",
		"certenglish": "<i class='fas fa-download'></i>",
		"german": "German",
		"spanish": "Spanish",
		"hungarian": "Hungarian",
		"coding": "<i class='fas fa-code'></i> CODING",
		"hobbies": "Interests",
		"getintouch": "Get In Touch",
		"phone": "<br><br>PHONE",
		"myResume": "Resume",
		"hungary":"Budapest, Hungary",
		"experience": "<i class='fas fa-briefcase'></i>Experience",
		"education": "<i class='fas fa-university'></i> Education",
		"certificates": "<i class='fas fa-university'></i> Courses & Certificates",
		"dateactive": "2022 - PRESENT",
		"swdev": "SOFTWARE DEVELOPER",
		"cashapp":"SENIOR CASH APPLICATION ANALYST",
		"proclead": "Order to Cash Regional Process Lead - Philippines",
		"imprspec": "Senior Process Improvement Specialist",
		"javadev": "Java Developer",
		"businessadm": "Master of Business Administration",
		"bachelor": "Bachelor of Science in Economics",
		"sap": "Being responsible for continuous innovation and support of SAP Integrated Business Planning product features for Supply Chain.",
		"sanofi": "Led, designed Cash Application process for Spain through the support of implementation of HighRadius Automation Software.",
		"diageo1": "Delivered various transition projects: analyzed exhaustively the 'Order to Cash' process specifics, diagnosed deviations, tasks, risks.",
		"diageo2": "Proactively improved 'Order to Cash' processes in the spotlight of quality assurance; <br>Completed Regression Testing of SAP Releases, monitored system application change requests and performed User Acceptance Tests.</p>",
		"progma": "Junior Java Developer Course at Progmatic Academy",
		"selenium": "Selenium WebDriver with Java",
		"certselenium": "Certificate <i class='fas fa-download'></i>",
		"certistqb": "Certificate <i class='fas fa-download'></i>",
		"certprog": "Certificate <i class='fas fa-download'></i>",
		"gotocourse": "Go to Course <i class='fas fa-arrow-right'></i>",
		"javaback": "Java Backend Junior Developer",
		"myproj": "My Projects",
		"javaproject": "Get academic details of a University's faculties from text file, returning in different type of Collections.",
		"sqlproject": "1. Built Database for a chat application. <br>2. Executed queries for country-city Database. <br>3. Built Database for members of programming school and executed queries.",
		"htmlproject": "Built a website for own Resume, translated to two languages, attached certificates and projects.",
		"javaproject2": "Blog Application with secured user registration, using JPA Repository controlled by REST-ful services with message converters (JSON, XML).",
		"testingproject": "Testing of a shopping cart application with Selenium, Cucumber. <br>Integrated Extent HTML Reports with TestNG Listeners, attaching screenshot. <br>Thread Safe execution.</p>",
		"hungary":"Budapest, Hungary",
		"colombia":"Medellín, Colombia",
		
		
     },
     "de": {
        "profession": "Softwareentwicklerin",
		"aboutme": "Über mich",
		"myresume": "Lebenslauf",
		"myprojects": "Projekte",
		"mycontact": "Kontakte",
		"downloadCV": "LEBENSLAUF HERUNTERLADEN <i class='fas fa-download'></i>",
		"sendemail": "EMAIL SENDEN <i class='fas fa-reply'></i>",
		"aboutaboutme": "Über mich",
		"skills": "Sprachen & Fähigkeiten",
		"aboutmetext": "<p>Mein Wachstumsmentalität hat mich dazu veranlasst, auf drei verschiedenen Kontinenten zu leben, was sowohl meine beruflichen als auch persönlichen Fähigkeiten gefördert hat. Von Softwareentwicklerin bilde ich mich zur Software-Testerin um, wodurch ich mit meinen technischen Fachkenntnissen und meiner Präzisität zum Detail eine einzigartige Perspektive einbringen kann, um die Qualität und Benutzerzufriedenheit von Anwendungen sicherzustellen. <br><br>Ich fühle mich zum Software-Testen hingezogen wegen der Möglichkeit von Zusammenarbeit mit funktionsübergreifenden Teams, einschließlich Entwicklern, Produktmanagern und anderen Interessengruppen. Ich glaube fest an die Kraft von Teamarbeit und effektiver Kommunikation. Durch die gemeinsame Arbeit können wir potenzielle Probleme frühzeitig identifizieren, wertvolle Rückmeldung geben und außergewöhnliche Software liefern, die die Erwartungen der Kunden übertrifft. </p>",
		"languages": "<i class='fas fa-tv'></i> Kenntnisse",
		"english": "Englisch",
		"german": "Deutsch",
		"spanish": "Spanisch",
		"hungarian": "Ungarisch",
		"coding": "<i class='fas fa-code'></i> PROGRAMMIEREN",
		"hobbies": "Interessen",
		"getintouch": "Kontaktieren Sie mich!",
		"phone": "<br><br>TELEFON",
		"myResume": "Lebenslauf",
		"hungary1":"Budapest, Ungarn",
		"experience": "<i class='fas fa-briefcase'></i>Berufserfahrung",
		"education": "<i class='fas fa-university'></i> Ausbildung",
		"certificates": "<i class='fas fa-university'></i> Kurse & Zertifikate",
		"dateactive": "SEIT 2022",
		"swdev": "SOFTWAREENTWICKLERIN",
		"cashapp":"SENIOR-ANALYST FÜR ZAHLUNGSABWICKLUNG",
		"proclead": "Order to Cash Leiterin regionaler Prozesse - Philippinen",
		"imprspec": "Senior-Spezialist für Prozessverbesserung",
		"javadev": "Java Entwicklerin",
		"businessadm": "MBA - Geschäftsverwaltung und Management",
		"bachelor": "Bachelor of Science in Wirtschaftswissenschaften",
		"sap": "Zuständig für die ständige Innovation und Support von Produktfunktionen für SAP Integrated Business Planning im Bereich Supply Chain.",
		"sanofi": "Ich habe den Cash Application-Prozess für Spanien geleitet und entworfen, bei dem ich die Implementierung der HighRadius Automatisierungssoftware unterstützt habe.",
		"diageo1": "Ich habe verschiedene Transition-projekte durchgeführt: ausführliche Analyse der spezifischen Aspekte des 'Order to Cash'-Prozesses, Diagnose von Abweichungen, Aufgaben und Risiken.",
		"diageo2": "Proaktiv verbesserte ich die Prozesse im Bereich 'Order to Cash' im Fokus der Qualitätssicherung; <br>Führte Regressionstests für SAP-Releases durch, überwachte Änderungsanfragen für die Systemanwendung und führte User Acceptance Tests durch.</p>",
		"progma": "Objektorientierte Programmierung in Java <br>Programmierkurs an der Progmatic Akademie",
		"selenium": "Selenium WebDriver mit Java",
		"certselenium": "Zertifikat <i class='fas fa-download'></i>",
		"certistqb": "Zertifikat <i class='fas fa-download'></i>",
		"certprog": "Zertifikat <i class='fas fa-download'></i>",
		"gotocourse": "Link zum Kurs <i class='fas fa-arrow-right'></i>",
		"javaback": "Java Backend Junior Entwicklerin",
		"myproj": "Meine Projekte",
		"javaproject": "Das Anzeigen der akademischen Details der Fakultäten einer Universität aus einer Textdatei in verschiedene Collection-typen.",
		"sqlproject": "1. Datenbank für eine Chat-Anwendung erstellt. <br>2. Abfragen für die Länder-Städte-Datenbank ausgeführt. <br>3. Datenbank für Mitglieder einer Programmierschule erstellt und Abfragen ausgeführt.",
		"htmlproject": "Eine Website für meinen eigenen Lebenslauf erstellt, in zwei Sprachen übersetzt, Zertifikate und Projekte angehängt.",
		"javaproject2": "Erstellung einer Blog-Anwendung mit sicherer Benutzerregistrierung, die von RESTful-Services gesteuert wird, und verwendet JPA-Repository mit Datenaustausch in JSON, XML Format.",
		"testingproject": "Das Testen einer Onlineshop-Anwendung mit Selenium, Cucumber, und ExtentReports. <br>Integration von Extent HTML-Berichten mit TestNG-Listenern.<br>Thread-sichere Ausführung.",
		"hungary":"Budapest, Ungarn",
		"colombia":"Medellín, Kolumbien",
		
    }
}



