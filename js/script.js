document.addEventListener("DOMContentLoaded", () => {
    // Declare AOS and particlesJS variables
    const AOS = window.AOS
    const particlesJS = window.particlesJS

    // Initialize AOS animation library
    if (AOS) {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: false,
            mirror: false,
        })
    }

    // Initialize particles.js
    if (particlesJS) {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#38bdf8",
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#38bdf8",
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5,
                        },
                    },
                    push: {
                        particles_nb: 3,
                    },
                },
            },
            retina_detect: true,
        })
    }

    // Navigation
    const navLinks = document.querySelectorAll(".nav-link")
    const contentSections = document.querySelectorAll(".content-section")

    // Show first section by default
    contentSections[0].classList.add("active")

    // Navigation click handler
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            // Remove active class from all links
            navLinks.forEach((link) => link.classList.remove("active"))

            // Add active class to clicked link
            this.classList.add("active")

            // Get the target section id
            const targetId = this.getAttribute("href").substring(1)

            // Hide all sections
            contentSections.forEach((section) => {
                section.classList.remove("active")
            })

            // Show target section
            document.getElementById(targetId).classList.add("active")

            // Close mobile navbar if open
            const navbarCollapse = document.querySelector(".navbar-collapse")
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show")
            }

            // Re-initialize AOS for the new section
            if (AOS) {
                AOS.refresh()
            }
        })
    })

    // Language selector
    const languageSelector = document.querySelector(".language-selector select")

    languageSelector.addEventListener("change", function () {
        // Here you would implement language switching logic
        console.log("Language changed to:", this.value)
    })

    // Animate skills progress bars in sidebar
    function animateSidebarSkills() {
        const skillBars = document.querySelectorAll(".skill-progress-fill")

        skillBars.forEach((bar) => {
            const value = bar.parentElement.parentElement.getAttribute("data-value")
            setTimeout(() => {
                bar.style.width = value + "%"
            }, 300)
        })
    }

    // Animate skills progress bars in main content
    function animateMainSkills() {
        const skillsSection = document.getElementById("ky-nang")
        const progressBars = skillsSection.querySelectorAll(".skill-progress")

        progressBars.forEach((bar) => {
            const width = bar.style.width
            bar.style.width = "0%"
            setTimeout(() => {
                bar.style.width = width
            }, 100)
        })
    }

    // Trigger skill animations
    animateSidebarSkills()

    // Trigger skill animation when skills section becomes active
    const skillsLink = document.querySelector('a[href="#ky-nang"]')
    skillsLink.addEventListener("click", () => {
        setTimeout(animateMainSkills, 300)
    })

    // Enhanced project cards animations
    function initProjectAnimations() {
        const projectCards = document.querySelectorAll(".project-card")

        // Animate projects when they come into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = "1"
                            entry.target.style.transform = "translateY(0)"
                        }, index * 100)
                    }
                })
            },
            { threshold: 0.1 },
        )

        projectCards.forEach((card) => {
            card.style.opacity = "0"
            card.style.transform = "translateY(30px)"
            card.style.transition = "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"
            observer.observe(card)
        })

        // Add stagger animation for tech tags
        projectCards.forEach((card) => {
            const techTags = card.querySelectorAll(".project-tech span")
            card.addEventListener("mouseenter", () => {
                techTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = "translateY(-2px) scale(1.05)"
                    }, index * 50)
                })
            })

            card.addEventListener("mouseleave", () => {
                techTags.forEach((tag) => {
                    tag.style.transform = "translateY(0) scale(1)"
                })
            })
        })
    }

    // Contact form submission
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault()

            // Here you would implement form submission logic
            alert("Tin nhắn của bạn đã được gửi!")
            this.reset()
        })
    }

    // Scroll to section when URL has hash
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1)
        const targetLink = document.querySelector(`a[href="#${targetId}"]`)

        if (targetLink) {
            targetLink.click()
        }
    }

    // Fix sidebar height on mobile
    function adjustSidebarHeight() {
        const sidebar = document.getElementById("sidebar")
        if (window.innerWidth <= 991) {
            sidebar.style.height = "auto"
        } else {
            sidebar.style.height = "100vh"
        }
    }

    // Call on load and resize
    adjustSidebarHeight()
    window.addEventListener("resize", adjustSidebarHeight)

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                })
            }
        })
    })

    // Typing effect for job title
    const jobTitle = document.querySelector(".typing-text")
    const text = jobTitle.textContent
    jobTitle.textContent = ""
    let i = 0

    function typeWriter() {
        if (i < text.length) {
            jobTitle.textContent += text.charAt(i)
            i++
            setTimeout(typeWriter, 100)
        }
    }

    setTimeout(typeWriter, 1000)

    // Animate tech stats with counting
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            obj.innerHTML = Math.floor(progress * (end - start) + start)
            if (progress < 1) {
                window.requestAnimationFrame(step)
            }
        }
        window.requestAnimationFrame(step)
    }

    // Set tech stats values
    const projectCount = document.getElementById("projectCount")
    // const experienceYears = document.getElementById("experienceYears")
    const skillCount = document.getElementById("skillCount")

    setTimeout(() => {
        animateValue(projectCount, 0, 7, 2000)
        // animateValue(experienceYears, 0, 5, 2000)
        animateValue(skillCount, 0, 7, 2000)
    }, 1000)

    // Initialize project animations
    initProjectAnimations()

    // Force dark mode
    document.body.classList.add("dark-mode")
    localStorage.setItem("theme", "dark")

    async function loadExperienceTimeline() {
        try {
            const response = await fetch("data/experience.json")
            const data = await response.json()

            const timelineContainer = document.getElementById("experience-timeline")

            data.timeline.forEach((item, index) => {
                const timelineItem = document.createElement("div")
                timelineItem.className = "timeline-item"
                timelineItem.setAttribute("data-aos", "fade-right")
                if (index > 0) {
                    timelineItem.setAttribute("data-aos-delay", (index * 100).toString())
                }

                // Create tags HTML
                const tagsHtml = item.tags.map((tag) => `<span>${tag}</span>`).join("")

                timelineItem.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">
                        <span>${item.date}</span>
                    </div>
                    <div class="timeline-content">
                        <h4>${item.title}</h4>
                        <h5>${item.subtitle}</h5>
                        <p>${item.description}</p>
                        <div class="timeline-tags">
                            ${tagsHtml}
                        </div>
                    </div>
                `

                timelineContainer.appendChild(timelineItem)
            })

            // Re-initialize AOS for new elements
            if (AOS) {
                AOS.refresh()
            }
        } catch (error) {
            console.error("Error loading experience timeline:", error)
        }
    }

    async function loadSkillsFromJSON() {
        try {
            const response = await fetch("data/skills.json")
            const data = await response.json()

            const skillsContainer = document.getElementById("skills-container")

            data.skills.forEach((skill, index) => {
                const skillCard = document.createElement("div")
                skillCard.className = "skill-card"
                skillCard.setAttribute("data-skill", skill.name)
                skillCard.setAttribute("data-aos", "zoom-in")
                skillCard.setAttribute("data-aos-duration", "500")
                if (index > 0) {
                    skillCard.setAttribute("data-aos-delay", (index * 50).toString())
                }

                skillCard.innerHTML = `
                    <div class="skill-icon">
                        <img src="${skill.icon}" alt="${skill.alt}"
                            style="width: 60px; height: 60px; object-fit: contain;">
                    </div>
                    <h4>${skill.name}</h4>
                `

                skillsContainer.appendChild(skillCard)
            })

            // Re-initialize AOS for new elements
            if (AOS) {
                AOS.refresh()
            }
        } catch (error) {
            console.error("Error loading skills:", error)
        }
    }

    async function loadProjectsFromJSON() {
        try {
            const response = await fetch("data/projects.json")
            const data = await response.json()

            const projectsContainer = document.getElementById("projects-container")

            data.projects.forEach((project, index) => {
                const projectCard = document.createElement("div")
                projectCard.className = "col-md-6 mb-4"
                projectCard.setAttribute("data-aos", project.aos.effect)
                if (project.aos.delay > 0) {
                    projectCard.setAttribute("data-aos-delay", project.aos.delay.toString())
                }

                // Create technologies HTML
                const technologiesHtml = project.technologies.map((tech) => `<span>${tech}</span>`).join("")

                projectCard.innerHTML = `
                    <div class="project-card">
                        <div class="project-img">
                            <img src="${project.image}" alt="${project.alt}">
                            
                        </div>
                        <div class="project-info">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                            <div class="project-tech">
                                ${technologiesHtml}
                            </div>
                            <div class="project-links">
                                <a href="${project.links.demo}" class="project-link" title="Xem demo"><i class="fas fa-external-link-alt"></i></a>
                                <a href="${project.links.github}" class="project-github" title="View Code"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                `

                projectsContainer.appendChild(projectCard)
            })

            // Re-initialize AOS for new elements
            if (AOS) {
                AOS.refresh()
            }

            // Re-initialize project animations for dynamically loaded projects
            initProjectAnimations()
        } catch (error) {
            console.error("Error loading projects:", error)
        }
    }

    loadExperienceTimeline()
    loadSkillsFromJSON()

    loadProjectsFromJSON()
})
