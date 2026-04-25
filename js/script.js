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
    const DEFAULT_LANGUAGE = "en"
    let currentLanguage = DEFAULT_LANGUAGE
    const languageSelector = document.querySelector(".language-selector select")
    const languageButtons = document.querySelectorAll(".language-selector .lang-option")
    const jobTitle = document.querySelector(".typing-text")
    let typingTimer = null

    const translations = {
        en: {
            pageTitle: "Le Thuan Phi - Frontend Developer",
            nav: ["About", "Skills", "Experience", "Projects", "Contact"],
            sidebar: {
                jobTitle: "Frontend Developer",
                status: "Available for new projects",
                downloadCv: "Download CV",
                contact: "Contact",
                contactInfo: "Contact Info",
                phone: "Phone",
                address: "Address",
                dob: "Date of Birth",
                coreSkills: "Core Skills",
                projects: "Projects",
                skills: "Skills",
            },
            sections: {
                about: "ABOUT",
                skills: "SKILLS",
                experience: "EXPERIENCE",
                projects: "PROJECTS",
                contact: "CONTACT",
            },
            intro: {
                heading: "Designing modern interfaces with optimized user experience.",
                lead:
                    "I am <strong>Le Thuan Phi</strong>, focused on building intuitive, smooth, and consistent web products across devices.",
                points: [
                    "Clear, minimal, easy-to-use UI",
                    "Responsive with real-world usage in mind",
                    "Performance and stability focused",
                ],
                stats: ["Projects Delivered", "Core Tech Areas", "UX Focused"],
                ctaContact: "Contact",
                floatBottom: "7+ real-world projects",
            },
            skillShowcase: {
                kicker: "Core Stack",
                summary:
                    "Focused on frontend quality, scalable backend integration, and delivery tooling.",
                legend: ["Frontend", "Backend", "Tooling"],
            },
            experience: {
                kicker: "Career Snapshot",
                heading: "Career Journey",
                metrics: ["Milestones", "Projects", "Work Roles"],
            },
            projects: {
                kicker: "Selected Works",
                heading: "Featured Projects",
                metrics: ["Total Projects", "Live Demos", "Technologies"],
                viewCode: "View code",
                viewDemo: "View demo",
            },
            contact: {
                heroTitle: "Let's build something meaningful!",
                heroDesc:
                    "I am always ready to hear your ideas and turn them into real products.",
                quickContact: "Quick Contact",
                messageTitle: "Send a Message",
                formLabels: ["Full Name", "Email", "Message"],
                submit: "Send Message",
                socialTitle: "Connect With Me",
                socialDesc: "Follow me on social platforms",
                success: "Your message has been sent!",
            },
        },
        vi: {
            pageTitle: "Lê Thuận Phi - Lập Trình Viên Frontend",
            nav: ["Giới thiệu", "Kỹ năng", "Kinh nghiệm", "Dự án", "Liên hệ"],
            sidebar: {
                jobTitle: "Lập Trình Viên Frontend",
                status: "Sẵn sàng nhận dự án mới",
                downloadCv: "Tải CV",
                contact: "Liên hệ",
                contactInfo: "Thông tin liên hệ",
                phone: "Điện thoại",
                address: "Địa chỉ",
                dob: "Ngày sinh",
                coreSkills: "Kỹ năng chính",
                projects: "Dự án",
                skills: "Kỹ năng",
            },
            sections: {
                about: "GIỚI THIỆU",
                skills: "KỸ NĂNG",
                experience: "KINH NGHIỆM",
                projects: "DỰ ÁN",
                contact: "LIÊN HỆ",
            },
            intro: {
                heading: "Thiết kế giao diện hiện đại, tối ưu trải nghiệm người dùng.",
                lead:
                    "Tôi là <strong>Lê Thuận Phi</strong>, tập trung xây dựng sản phẩm web trực quan, mượt và nhất quán trên mọi thiết bị.",
                points: [
                    "UI rõ ràng, tinh gọn, dễ dùng",
                    "Responsive theo thực tế sử dụng",
                    "Tối ưu hiệu năng và tính ổn định",
                ],
                stats: ["Dự án đã triển khai", "Nhóm công nghệ chính", "Tập trung vào UX"],
                ctaContact: "Liên hệ",
                floatBottom: "7+ dự án thực chiến",
            },
            skillShowcase: {
                kicker: "Nền tảng cốt lõi",
                summary:
                    "Tập trung vào chất lượng frontend, tích hợp backend linh hoạt và quy trình triển khai hiệu quả.",
                legend: ["Frontend", "Backend", "Công cụ"],
            },
            experience: {
                kicker: "Tổng quan sự nghiệp",
                heading: "Hành trình phát triển",
                metrics: ["Mốc kinh nghiệm", "Dự án", "Làm việc"],
            },
            projects: {
                kicker: "Dự án chọn lọc",
                heading: "Dự án nổi bật",
                metrics: ["Tổng dự án", "Có demo", "Công nghệ"],
                viewCode: "Xem mã nguồn",
                viewDemo: "Xem demo",
            },
            contact: {
                heroTitle: "Hãy cùng tạo nên điều tuyệt vời!",
                heroDesc:
                    "Tôi luôn sẵn sàng lắng nghe ý tưởng của bạn và biến chúng thành hiện thực.",
                quickContact: "Liên hệ nhanh",
                messageTitle: "Gửi tin nhắn",
                formLabels: ["Họ và tên", "Email", "Nội dung tin nhắn"],
                submit: "Gửi tin nhắn",
                socialTitle: "Kết nối với tôi",
                socialDesc: "Theo dõi tôi trên các nền tảng mạng xã hội",
                success: "Tin nhắn của bạn đã được gửi!",
            },
        },
    }

    function setText(selector, value) {
        const element = document.querySelector(selector)
        if (element && typeof value === "string") {
            element.textContent = value
        }
    }

    function setHTML(selector, value) {
        const element = document.querySelector(selector)
        if (element && typeof value === "string") {
            element.innerHTML = value
        }
    }

    function typeJobTitle(text) {
        if (!jobTitle) return
        if (typingTimer) clearTimeout(typingTimer)

        jobTitle.textContent = ""
        let index = 0
        const speed = 55

        const typeNext = () => {
            if (index < text.length) {
                jobTitle.textContent += text.charAt(index)
                index++
                typingTimer = setTimeout(typeNext, speed)
            }
        }

        typingTimer = setTimeout(typeNext, 120)
    }

    function applyLanguage(lang) {
        const targetLang = lang === "vi" ? "vi" : "en"
        currentLanguage = targetLang
        const t = translations[targetLang]

        document.documentElement.lang = targetLang
        document.title = t.pageTitle

        if (languageSelector) {
            languageSelector.value = targetLang
        }

        languageButtons.forEach((button) => {
            const isActive = button.dataset.lang === targetLang
            button.classList.toggle("active", isActive)
            button.setAttribute("aria-pressed", isActive ? "true" : "false")
        })

        setText('.nav-link[href="#gioi-thieu"] .nav-text', t.nav[0])
        setText('.nav-link[href="#ky-nang"] .nav-text', t.nav[1])
        setText('.nav-link[href="#kinh-nghiem"] .nav-text', t.nav[2])
        setText('.nav-link[href="#du-an"] .nav-text', t.nav[3])
        setText('.nav-link[href="#lien-he"] .nav-text', t.nav[4])

        typeJobTitle(t.sidebar.jobTitle)
        setText(".status-text", t.sidebar.status)
        setText(".action-buttons .tech-btn.primary span", t.sidebar.downloadCv)
        setText(".action-buttons .tech-btn.secondary .nav-text", t.sidebar.contact)
        setText(".contact-section .section-header h5", t.sidebar.contactInfo)
        setText(".info-item:nth-child(2) .info-label", t.sidebar.phone)
        setText(".info-item:nth-child(3) .info-label", t.sidebar.address)
        setText(".info-item:nth-child(4) .info-label", t.sidebar.dob)
        setText(".skills-section .section-header h5", t.sidebar.coreSkills)

        const statLabels = document.querySelectorAll(".tech-stats .stat-label")
        if (statLabels[0]) statLabels[0].textContent = t.sidebar.projects
        if (statLabels[1]) statLabels[1].textContent = t.sidebar.skills

        setText("#gioi-thieu .section-title", t.sections.about)
        setText("#ky-nang .section-title", t.sections.skills)
        setText("#kinh-nghiem .section-title", t.sections.experience)
        setText("#du-an .section-title", t.sections.projects)
        setText("#lien-he .section-title", t.sections.contact)

        setText("#gioi-thieu .intro-modern h3", t.intro.heading)
        setHTML("#gioi-thieu .intro-modern-lead", t.intro.lead)

        const introPoints = document.querySelectorAll("#gioi-thieu .intro-point span")
        introPoints.forEach((point, idx) => {
            if (t.intro.points[idx]) point.textContent = t.intro.points[idx]
        })

        const introStats = document.querySelectorAll("#gioi-thieu .intro-modern-stat .label")
        introStats.forEach((stat, idx) => {
            if (t.intro.stats[idx]) stat.textContent = t.intro.stats[idx]
        })

        setHTML(
            "#gioi-thieu .intro-modern-actions .btn-primary",
            `<i class="fas fa-download me-2"></i>${t.sidebar.downloadCv}`,
        )
        setHTML(
            "#gioi-thieu .intro-modern-actions .btn-outline-primary",
            `<i class="fas fa-paper-plane me-2"></i>${t.intro.ctaContact}`,
        )
        setText("#gioi-thieu .intro-float-card-bottom span", t.intro.floatBottom)

        setText("#ky-nang .skills-summary", t.skillShowcase.summary)
        setText("#ky-nang .skills-kicker", t.skillShowcase.kicker)
        const legendItems = document.querySelectorAll("#ky-nang .legend-item")
        legendItems.forEach((item, idx) => {
            const dot = item.querySelector(".legend-dot")
            if (dot && t.skillShowcase.legend[idx]) {
                item.textContent = ""
                item.appendChild(dot)
                item.appendChild(document.createTextNode(t.skillShowcase.legend[idx]))
            }
        })

        setText("#kinh-nghiem .experience-title-wrap h3", t.experience.heading)
        setText("#kinh-nghiem .experience-kicker", t.experience.kicker)
        const experienceMetrics = document.querySelectorAll("#kinh-nghiem .metric-label")
        experienceMetrics.forEach((metric, idx) => {
            if (t.experience.metrics[idx]) metric.textContent = t.experience.metrics[idx]
        })

        setText("#du-an .project-showcase-title h3", t.projects.heading)
        setText("#du-an .project-showcase-kicker", t.projects.kicker)
        const projectMetrics = document.querySelectorAll("#du-an .metric-label")
        projectMetrics.forEach((metric, idx) => {
            if (t.projects.metrics[idx]) metric.textContent = t.projects.metrics[idx]
        })

        setText("#lien-he .contact-hero h3", t.contact.heroTitle)
        setText("#lien-he .contact-hero p", t.contact.heroDesc)
        setText("#lien-he .quick-contact .card-header h4", t.contact.quickContact)
        setText("#lien-he .contact-method.phone .method-label", t.sidebar.phone)
        setText("#lien-he .contact-method.location .method-label", t.sidebar.address)
        setText("#lien-he .message-form .card-header h4", t.contact.messageTitle)

        const formLabels = document.querySelectorAll("#lien-he .message-form .form-label")
        formLabels.forEach((label, idx) => {
            if (t.contact.formLabels[idx]) label.textContent = t.contact.formLabels[idx]
        })

        setText("#lien-he .message-form .btn-text", t.contact.submit)
        setText("#lien-he .social-connect h4", t.contact.socialTitle)
        setText("#lien-he .social-connect p", t.contact.socialDesc)

        loadSkillsFromJSON()
        loadProjectsFromJSON()
    }

    if (languageSelector) {
        languageSelector.value = DEFAULT_LANGUAGE
        languageSelector.addEventListener("change", function () {
            applyLanguage(this.value)
        })
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.lang)
        })
    })

    // Animate skills progress bars in sidebar
    function animateSidebarSkills() {
        const skillBadges = document.querySelectorAll(".skill-badge")
        skillBadges.forEach((badge, index) => {
            badge.style.opacity = "0"
            badge.style.transform = "translateY(20px)"
            setTimeout(() => {
                badge.style.opacity = "1"
                badge.style.transform = "translateY(0)"
                badge.style.transition = "all 0.6s ease"
            }, index * 100)
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
        const projectCards = document.querySelectorAll(".showcase-card")

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
            const techTags = card.querySelectorAll(".showcase-tech span")
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
    const contactForm = document.querySelector(".modern-contact-form")
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault()

            // Here you would implement form submission logic
            const successMessage =
                translations[currentLanguage]?.contact?.success || "Your message has been sent!"
            alert(successMessage)
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
        animateValue(skillCount, 0, 10, 2000)
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
            const totalExperience = document.getElementById("exp-total")
            const projectExperience = document.getElementById("exp-project")
            const workExperience = document.getElementById("exp-work")

            if (!timelineContainer) return
            timelineContainer.innerHTML = ""

            let projectCount = 0
            let workCount = 0

            data.timeline.forEach((item, index) => {
                const timelineItem = document.createElement("div")
                timelineItem.className = "experience-card"
                timelineItem.setAttribute("data-aos", "fade-up")
                timelineItem.setAttribute("data-aos-duration", "550")
                if (index > 0) {
                    timelineItem.setAttribute("data-aos-delay", ((index % 6) * 70).toString())
                }

                const subtitle = item.subtitle || ""
                const subtitleNormal = subtitle
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()

                if (
                    subtitleNormal.includes("du an") ||
                    subtitleNormal.includes("assignment")
                ) {
                    projectCount++
                }

                if (
                    subtitleNormal.includes("nhan vien") ||
                    subtitleNormal.includes("thuc tap")
                ) {
                    workCount++
                }

                const tagsHtml = (item.tags || [])
                    .map((tag) => `<span class="exp-tag">${tag}</span>`)
                    .join("")

                timelineItem.innerHTML = `
                    <div class="exp-card-head">
                        <span class="exp-date">${item.date}</span>
                        <span class="exp-type">${item.subtitle}</span>
                    </div>
                    <div class="exp-card-body">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <div class="exp-tags">
                            ${tagsHtml}
                        </div>
                    </div>
                `

                timelineContainer.appendChild(timelineItem)
            })

            if (totalExperience) totalExperience.textContent = data.timeline.length.toString()
            if (projectExperience) projectExperience.textContent = projectCount.toString()
            if (workExperience) workExperience.textContent = workCount.toString()

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
            if (!skillsContainer) return
            skillsContainer.innerHTML = ""

            const locale = currentLanguage === "vi" ? "vi" : "en"
            const groupLabelMap = {
                frontend: { en: "Frontend", vi: "Frontend" },
                backend: { en: "Backend", vi: "Backend" },
                tooling: { en: "Tooling", vi: "Công cụ" },
            }

            const skillMetaMap = {
                HTML5: {
                    group: "frontend",
                    accent: "#ff7a45",
                    detail: { en: "Semantic and accessible markup", vi: "Đánh dấu ngữ nghĩa và khả năng truy cập tốt" },
                },
                CSS3: {
                    group: "frontend",
                    accent: "#4f9cff",
                    detail: { en: "Responsive layouts and modern styling", vi: "Bố cục responsive và phong cách hiện đại" },
                },
                JavaScript: {
                    group: "frontend",
                    accent: "#f7d046",
                    detail: { en: "Interactive UI and component logic", vi: "Tương tác UI và xử lý logic thành phần" },
                },
                Bootstrap: {
                    group: "frontend",
                    accent: "#8c7bff",
                    detail: { en: "Fast interface delivery", vi: "Triển khai giao diện nhanh và ổn định" },
                },
                "Tailwind CSS": {
                    group: "frontend",
                    accent: "#22d3ee",
                    detail: { en: "Utility-first design system", vi: "Thiết kế theo hướng utility-first" },
                },
                WordPress: {
                    group: "backend",
                    accent: "#4b8bbd",
                    detail: { en: "Content-focused website delivery", vi: "Xây dựng website tập trung nội dung" },
                },
                Git: {
                    group: "tooling",
                    accent: "#ff835c",
                    detail: { en: "Versioning and team workflow", vi: "Quản lý phiên bản và phối hợp nhóm" },
                },
                Java: {
                    group: "backend",
                    accent: "#ffb347",
                    detail: { en: "Scalable server-side foundation", vi: "Nền tảng backend có khả năng mở rộng" },
                },
                "Spring Boot": {
                    group: "backend",
                    accent: "#77cf58",
                    detail: { en: "REST APIs and business logic", vi: "Xây dựng REST API và xử lý nghiệp vụ" },
                },
                Thymeleaf: {
                    group: "backend",
                    accent: "#47b968",
                    detail: { en: "Template-based web rendering", vi: "Render giao diện theo mô hình template" },
                },
            }

            data.skills.forEach((skill, index) => {
                const skillMeta = skillMetaMap[skill.name] || {
                    group: "tooling",
                    accent: "#38bdf8",
                    detail: {
                        en: "Continuous skill expansion",
                        vi: "Liên tục mở rộng kỹ năng chuyên môn",
                    },
                }

                const groupLabel = groupLabelMap[skillMeta.group]?.[locale] || groupLabelMap.tooling[locale]
                const detail = skillMeta.detail?.[locale] || skillMeta.detail?.en || ""

                const skillCard = document.createElement("div")
                skillCard.className = "skill-card"
                skillCard.setAttribute("data-skill", skill.name)
                skillCard.setAttribute("data-group", skillMeta.group)
                skillCard.style.setProperty("--skill-accent", skillMeta.accent)
                skillCard.setAttribute("data-aos", "zoom-in")
                skillCard.setAttribute("data-aos-duration", "500")
                if (index > 0) {
                    skillCard.setAttribute("data-aos-delay", (index * 50).toString())
                }

                skillCard.innerHTML = `
                    <div class="skill-card-top">
                        <div class="skill-icon">
                            <img src="${skill.icon}" alt="${skill.alt}">
                        </div>
                        <span class="skill-group">${groupLabel}</span>
                    </div>
                    <div class="skill-card-body">
                        <h4>${skill.name}</h4>
                        <p>${detail}</p>
                    </div>
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
            const totalProjects = document.getElementById("project-total")
            const liveProjects = document.getElementById("project-live")
            const stackCount = document.getElementById("project-stack")

            if (!projectsContainer) return
            projectsContainer.innerHTML = ""

            let liveDemoCount = 0
            const uniqueTechnologies = new Set()

            const projectLabels = translations[currentLanguage]?.projects || translations.en.projects

            data.projects.forEach((project, index) => {
                const projectCard = document.createElement("div")
                projectCard.className = "showcase-card"
                projectCard.setAttribute("data-aos", "fade-up")
                projectCard.setAttribute("data-aos-duration", "550")
                if (index > 0) {
                    projectCard.setAttribute("data-aos-delay", ((index % 6) * 70).toString())
                }

                const technologiesHtml = (project.technologies || [])
                    .map((tech) => `<span>${tech}</span>`)
                    .join("")

                const hasLiveDemo = project.links?.demo && project.links.demo !== "#"
                if (hasLiveDemo) liveDemoCount++

                ;(project.technologies || []).forEach((tech) => uniqueTechnologies.add(tech))

                projectCard.innerHTML = `
                    <div class="showcase-media">
                        <a href="${hasLiveDemo ? project.links.demo : project.links.github}" target="_blank" rel="noopener noreferrer">
                            <img src="${project.image}" alt="${project.alt}">
                        </a>
                    </div>
                    <div class="showcase-body">
                        <div class="showcase-header">
                            <h4>${project.title}</h4>
                            <div class="showcase-links">
                                <a href="${project.links.github}" class="showcase-link-btn" title="${projectLabels.viewCode}" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="${project.links.demo}" class="showcase-link-btn ${hasLiveDemo ? "" : "is-disabled"}" title="${projectLabels.viewDemo}" ${hasLiveDemo ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true" tabindex="-1"'}>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                        <p>${project.description}</p>
                        <div class="showcase-tech">
                            ${technologiesHtml}
                        </div>
                    </div>
                `

                projectsContainer.appendChild(projectCard)
            })

            if (totalProjects) totalProjects.textContent = data.projects.length.toString()
            if (liveProjects) liveProjects.textContent = liveDemoCount.toString()
            if (stackCount) stackCount.textContent = uniqueTechnologies.size.toString()

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
    applyLanguage(DEFAULT_LANGUAGE)
})
