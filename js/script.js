document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS animation library
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: false,
            mirror: false,
        })
    }

    // Initialize particles.js
    if (typeof particlesJS !== "undefined") {
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
    const experienceYears = document.getElementById("experienceYears")
    const skillCount = document.getElementById("skillCount")

    setTimeout(() => {
        animateValue(projectCount, 0, 12, 2000)
        animateValue(experienceYears, 0, 5, 2000)
        animateValue(skillCount, 0, 8, 2000)
    }, 1000)

    // Force dark mode
    document.body.classList.add("dark-mode")
    localStorage.setItem("theme", "dark")
})
