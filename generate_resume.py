import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER

def create_resume():
    # PDF output path
    pdf_path = os.path.join("public", "resume.pdf")
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)

    # Document Setup (0.4 inch margins to fit on a single page)
    margin = 28
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=margin,
        bottomMargin=margin
    )

    # Calculate usable width (Letter is 612 x 792 points)
    usable_width = 612 - (2 * margin)  # 612 - 56 = 556
    left_col_width = 330
    right_col_width = usable_width - left_col_width - 16  # 556 - 330 - 16 = 210
    spacer_width = 16

    styles = getSampleStyleSheet()

    # Define custom styles
    # Colors
    primary_color = colors.HexColor("#1e293b")  # Slate 800
    accent_color = colors.HexColor("#4f46e5")   # Indigo 600
    text_color = colors.HexColor("#334155")     # Slate 700
    light_bg = colors.HexColor("#f1f5f9")       # Slate 100
    skill_bg = colors.HexColor("#e2e8f0")       # Slate 200

    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=28,
        leading=32,
        textColor=primary_color,
        spaceAfter=2
    )

    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=15,
        textColor=accent_color,
        spaceAfter=10
    )

    summary_style = ParagraphStyle(
        'SummaryStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_color,
        spaceAfter=12
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=14,
        textColor=primary_color,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )

    role_title = ParagraphStyle(
        'RoleTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=primary_color,
        spaceBefore=4,
        keepWithNext=True
    )

    company_style = ParagraphStyle(
        'CompanyStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=accent_color,
        keepWithNext=True
    )

    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=10,
        textColor=colors.HexColor("#64748b"),
        keepWithNext=True
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_color,
        leftIndent=10,
        firstLineIndent=-10,
        spaceAfter=3
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=text_color,
        spaceAfter=4
    )

    project_title = ParagraphStyle(
        'ProjectTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        textColor=primary_color,
        spaceBefore=4,
        keepWithNext=True
    )

    project_tech = ParagraphStyle(
        'ProjectTech',
        parent=styles['Normal'],
        fontName='Helvetica-BoldOblique',
        fontSize=8,
        leading=10,
        textColor=accent_color,
        spaceAfter=2,
        keepWithNext=True
    )

    # ------------------ LEFT COLUMN FLOWABLES ------------------
    left_flowables = []

    # Name and Title
    left_flowables.append(Paragraph("Nandini .", name_style))
    left_flowables.append(Paragraph("Software Engineer | MCA Student", title_style))

    # Summary
    summary_text = (
        "Software Engineer with hands-on experience in full-stack web development using the MERN stack. "
        "Previously worked as a Full Stack Developer Trainee, contributing to live projects by building "
        "responsive UIs, secure APIs, and performance-optimized features. Passionate about problem-solving "
        "and modern web development."
    )
    left_flowables.append(Paragraph(summary_text, summary_style))

    # Section: WORK EXPERIENCE
    left_flowables.append(Paragraph("WORK EXPERIENCE", section_heading))
    # Line separator
    left_flowables.append(Spacer(1, 2))

    # Job 1: Software Engineer
    left_flowables.append(Paragraph("Software Engineer", role_title))
    # Sub-table for Company and Date/Location to layout on the same line
    comp_date_table1 = Table(
        [[Paragraph("MULTIOPS IT SOLUTIONS", company_style), Paragraph("10/2025 - Present, Chandigarh", date_style)]],
        colWidths=[180, 150]
    )
    comp_date_table1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(comp_date_table1)
    
    achievements1 = [
        "Full-stack development for Eternal Sikhs live project (frontend & backend) <font color='#4f46e5'><u>https://eternalsikhs.com</u></font>",
        "Performance optimization and UI animations for MultiOps company website.",
        "Frontend development and CMS enhancements for MultiOps CMS website <font color='#4f46e5'><u>https://multiopseu.com</u></font>"
    ]
    for ach in achievements1:
        left_flowables.append(Paragraph(f"&bull; {ach}", bullet_style))

    left_flowables.append(Spacer(1, 8))

    # Job 2: Full Stack Developer Trainee
    left_flowables.append(Paragraph("Full Stack Developer Trainee", role_title))
    comp_date_table2 = Table(
        [[Paragraph("MULTIOPS IT SOLUTIONS", company_style), Paragraph("04/2025 - 09/2025, Chandigarh", date_style)]],
        colWidths=[180, 150]
    )
    comp_date_table2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(comp_date_table2)

    achievements2 = [
        "Learning and building full-stack web applications using <b>MERN stack</b>.",
        "Implementing <b>authentication</b> and <b>secure APIs</b> with JWT and bcrypt.",
        "Gaining some experience in <b>Agile workflow</b> and version control with Git/GitHub.",
        "Completed <b>hands-on AI/ML training</b>, developing expertise in integrating AI models into web applications.",
        "Developed <b>AI-Powered Job Portal</b>, integrating FastAPI, MERN, and AI/ML technologies for intelligent job matching, resume analysis, and automated notifications.",
        "Gained hands-on experience managing HTTP sessions, handling redirects and cookies, securing sensitive data, implementing structured logging."
    ]
    for ach in achievements2:
        left_flowables.append(Paragraph(f"&bull; {ach}", bullet_style))

    left_flowables.append(Spacer(1, 10))

    # Section: EDUCATION
    left_flowables.append(Paragraph("EDUCATION", section_heading))

    # Edu 1: Master of Computer Applications
    edu_table1 = Table(
        [[Paragraph("<b>Master of Computer Applications</b>", role_title), Paragraph("01/2025 - Present", date_style)]],
        colWidths=[220, 110]
    )
    edu_table1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(edu_table1)
    left_flowables.append(Paragraph("Lovely Professional University", company_style))

    left_flowables.append(Spacer(1, 4))

    # Edu 2: Bachelor of Computer Applications
    edu_table2 = Table(
        [[Paragraph("<b>Bachelor of Computer Applications</b>", role_title), Paragraph("10/2021 - 05/2024", date_style)]],
        colWidths=[220, 110]
    )
    edu_table2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(edu_table2)
    left_flowables.append(Table([[Paragraph("GGDSD College, Chandigarh", company_style), Paragraph("Score: 73.3%", date_style)]], colWidths=[220, 110], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))

    left_flowables.append(Spacer(1, 4))

    # Edu 3: Secondary Education
    edu_table3 = Table(
        [[Paragraph("<b>Secondary Education</b>", role_title), Paragraph("07/2019 - 07/2021", date_style)]],
        colWidths=[220, 110]
    )
    edu_table3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(edu_table3)
    left_flowables.append(Table([[Paragraph("Government Model Senior Secondary School, Chandigarh", company_style), Paragraph("Score: 86.6%", date_style)]], colWidths=[220, 110], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))

    # ------------------ RIGHT COLUMN FLOWABLES ------------------
    right_flowables = []

    # Contact Info Block (Centered text, icons are represented by bold letters)
    contact_header_style = ParagraphStyle(
        'ContactHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=primary_color,
        alignment=TA_RIGHT,
        spaceAfter=6
    )
    
    right_flowables.append(Paragraph("<b>nandinianil1352@gmail.com</b> &nbsp;&nbsp;&#9993;", contact_header_style))
    right_flowables.append(Paragraph("<b>9814114235</b> &nbsp;&nbsp;&#9742;", contact_header_style))
    right_flowables.append(Paragraph("<b>MOHALI, India</b> &nbsp;&nbsp;&#128205;", contact_header_style))
    right_flowables.append(Paragraph("<b>linkedin.com/in/nandini-9366592a9</b> &nbsp;&nbsp;&#128188;", contact_header_style))
    right_flowables.append(Paragraph("<b>github.com/NANDINI506</b> &nbsp;&nbsp;&#128187;", contact_header_style))

    right_flowables.append(Spacer(1, 15))

    # Section: SKILLS
    right_flowables.append(Paragraph("SKILLS", section_heading))
    right_flowables.append(Spacer(1, 2))

    # Grid of skills tags represented as small table blocks or paragraphs
    skills_list = [
        "HTML", "CSS", "JavaScript", "React.js",
        "TypeScript", "Python", "C/C++", "Java",
        "MongoDB", "MySQL", "SQLite", "Node js",
        ".NET", "ASP .NET", "JSON", "PHP", "Git",
        "Github", "MS Office", "FastAPI", "Netlify",
        "Docker", "Express js", "REST API's", "Redux",
        "Authentication & Authorization", "Postman"
    ]

    # Render skills as wrapped tag flows in cells
    skills_data = []
    # Create rows of 2 skills depending on length
    i = 0
    while i < len(skills_list):
        s1 = skills_list[i]
        s2 = skills_list[i+1] if i+1 < len(skills_list) else ""
        
        # We can format them as styled cell paragraphs
        p1 = Paragraph(f"<font color='#1e293b'><b>{s1}</b></font>", ParagraphStyle('Sk', parent=styles['Normal'], fontSize=7.5, leading=9, alignment=TA_CENTER))
        p2 = Paragraph(f"<font color='#1e293b'><b>{s2}</b></font>" if s2 else "", ParagraphStyle('Sk', parent=styles['Normal'], fontSize=7.5, leading=9, alignment=TA_CENTER))
        
        skills_data.append([p1, p2])
        i += 2

    skills_table = Table(skills_data, colWidths=[right_col_width/2.0, right_col_width/2.0])
    skills_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), light_bg),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('INNERGRID', (0,0), (-1,-1), 1, colors.white),
        ('BOX', (0,0), (-1,-1), 1, colors.white),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 2),
        ('RIGHTPADDING', (0,0), (-1,-1), 2),
    ]))
    right_flowables.append(skills_table)

    right_flowables.append(Spacer(1, 15))

    # Section: PERSONAL PROJECTS
    right_flowables.append(Paragraph("PERSONAL PROJECTS", section_heading))
    right_flowables.append(Spacer(1, 2))

    # Project 1: Tourism Website
    right_flowables.append(Paragraph("Tourism Website", project_title))
    right_flowables.append(Paragraph("Tech Stack: HTML, CSS, JavaScript", project_tech))
    p1_desc = (
        "Developed a fully functional tourism website with dynamic UI features. "
        "Implemented interactive pages and structured layout for tourist information. "
        "Enhanced frontend skills and improved logical problem-solving. <br/>"
        "<font color='#4f46e5'><u>https://funvisit.netlify.app</u></font>"
    )
    right_flowables.append(Paragraph(p1_desc, ParagraphStyle('PDesc', parent=styles['Normal'], fontSize=8, leading=10.5, textColor=text_color, spaceAfter=8)))

    # Project 2: Online Food Delivery Platform
    right_flowables.append(Paragraph("Online Food Delivery Platform", project_title))
    right_flowables.append(Paragraph("Tech Stack: HTML, CSS, JavaScript", project_tech))
    p2_desc = (
        "Built a responsive online food ordering platform with real-time user interactions. "
        "Implemented multiple pages including menu, cart, and checkout flow. "
        "Strengthened frontend design, form handling, and validation skills. <br/>"
        "<font color='#4f46e5'><u>https://foodycart.netlify.app</u></font>"
    )
    right_flowables.append(Paragraph(p2_desc, ParagraphStyle('PDesc', parent=styles['Normal'], fontSize=8, leading=10.5, textColor=text_color, spaceAfter=8)))

    # Project 3: Event Planning Website
    right_flowables.append(Paragraph("Event Planning Website", project_title))
    right_flowables.append(Paragraph("Tech Stack: HTML, CSS, JavaScript, PHP, SQL", project_tech))
    p3_desc = (
        "Created a full-stack event management site with booking and event listing features. "
        "Used PHP and SQL to store and retrieve data dynamically. "
        "Gained experience in backend integration and client-server architecture. <br/>"
        "<font color='#4f46e5'><u>https://omegaparty.netlify.app</u></font>"
    )
    right_flowables.append(Paragraph(p3_desc, ParagraphStyle('PDesc', parent=styles['Normal'], fontSize=8, leading=10.5, textColor=text_color)))

    # ------------------ MASTER TABLE LAYOUT ------------------
    # To place left and right columns side-by-side, we enclose them in a Table.
    master_table_data = [[left_flowables, "", right_flowables]]
    master_table = Table(
        master_table_data, 
        colWidths=[left_col_width, spacer_width, right_col_width]
    )
    master_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))

    # Build Document
    doc.build([master_table])
    print("Resume PDF generated successfully!")

if __name__ == '__main__':
    create_resume()
