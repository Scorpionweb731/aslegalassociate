const authorName = 'ABHISHEK SHRIVASTAVA'
const designation = 'Advocate'
const designationmore = 'High Court of M.P. at Jabalpur'

const author_image  =  'images/author_image.jpeg'

const personalProfile = {
    // Age: ['age',45],
    dob : ["Date of Birth", "12th May 1979"],
    Office: ["Office", "H.No.1821, Nav-Nivesh Colony, Near Rani Durgawati, Ganga Nagar, Garha, Jabalpur, M P"],
    father: ["Father's Name","Mr. S.N. Shrivastava"],
    father_occupation : ["Father's Occupation", "Rtd SDO from M.P.Govt."] ,
    permanent_address : ["Permanent Address","1821, Nav Nivesh Coloney, Garha, Jabalpur, M.P."]
}
const contact = {
    Contact : ["Contact", "+9193000-00036, +9188716-00600","ic:outline-phone"],
    Email : ["E-mail ID", "abhishek.adv@gmail.com","ic:outline-email"],
    Residence: ["Residence", "Jabalpur M.P.","ic:outline-location-on"],
}

const services = {
    corporateandcommercial: {
        title: "Corporate & Commercial",
        subcategories: [
            "Agreements - General And Commercial",
            "Banking and Finance",
            "Capital Markets",
            "Company Secretarial Services, Corporate Governance And Regulatory Compliance",
            "Insolvency and Bankruptcy Code",
            "Virtual CFO Services",
            "India Entry Strategy",
        ],
    },
    LitigationService: {
        title: "Litigation Service",
        subcategories: [
            "Arbitration",
            "Civil & Commercial Litigation",
            "Criminal Litigation",
            "Mediation",
            "Arbitration and Mediation",
        ],
    },
    MergerandAcquisition: {
        title: "Merger & Acquisition",
        subcategories: [
            "Corporate Finance",
            "Franchise & Licensing",
            "Joint Ventures & Strategic Alliance",
            "Private Equity",
            "Restructuring and Demerger",
        ],
    },
    TaxationDirectandIndirect: {
        title: "Taxation, Direct and Indirect",
        subcategories: [
            "Goods and Services Tax",
            "Goods and Services Tax and Custom Duty",
            "Income Tax",
            "International and Withholding Tax",
            "Transfer Pricing",
        ],
    },
    IntellectualProperty: {
        title: "Intellectual Property",
        subcategories: [
            "Copyright",
            "Data Privacy and Data Security",
            "Intellectual Property Litigation",
            "Patent Service",
            "Trademark",
        ],
    },
    LaborandEmployment: {
        title: "Labor & Employment",
        subcategories: [
            "HR Policy, Procedures And Compliance",
            "Litigation Severance",
        ],
    },
    NRIServices: {
        title: "NRI Services",
        subcategories: [
            "Marriage, Divorce, Adoption & Child Custody",
            "Real Estate and Property",
            "Taxation Services",
        ],
    },
    Immigration: {
        title: "Immigration",
        subcategories: [
            "Birth Certificate/NABC",
            "Indian Citizenship",
            "Indian Visa- Business Visa & Employment Visa",
            "OCI",
            "Registration With FRRO",
        ],
    },
    AdmiraltyShippingandMaritime: {
        title: "Admiralty, Shipping and Maritime",
        subcategories: ["Regulatory Compliances", "Maritime Litigation"],
    },
    FamilyLaw: {
        title: "Family Law",
        subcategories: [
            "Adoption",
            "Divorce & Child Custody",
            "Marriage Solemnization & Registration",
            "Surrogacy",
        ],
    },
    RealEstate: {
        title: "Real Estate",
        subcategories: ["Due Diligence and Compliance", "RERA"],
    },
    InheritanceWillsandEstate: {
        title: "Inheritance, Wills & Estate",
        subcategories: [
            "Estate Planning",
            "Trusts",
            "WILL - Drafting and Registration",
        ],
    },
};


document.title = 'ABHISHEK SHRIVASTAVA'
document.querySelector('.author_image').src = author_image;
document.querySelector('.author_image2').src = author_image;
document.querySelector('.author_name').innerHTML = authorName;
document.querySelector('.author_name2').innerHTML = authorName;
const authorservicearea = document.getElementsByClassName('author_services')[0]; // Select the first element

for (const key in services) {
    const service = services[key]; 

    const subcategoriesHTML = `
        <ul>
            ${service.subcategories.map(subcategory => `<li>${subcategory}</li>`).join("")}
        </ul>`;

    const serviceHTML = `
        <div class="col d-flex align-items-start pb-4">
            <img src="images/shipment upload.png" alt="image">
            <div>
                <h4 class="fw-bold mb-0">${service.title}</h4>
                ${subcategoriesHTML} <!-- Insert bullet list of subcategories -->
            </div>
        </div>`;

        authorservicearea.insertAdjacentHTML('beforeend', serviceHTML);
}

const address_list = document.querySelector('.address_list');

for (const key in personalProfile) {
    const profile = personalProfile[key]; 

    const li = document.createElement("li");
    li.innerHTML = `<b>${profile[0]}:</b> ${profile[1]}`;
    
    address_list.appendChild(li);
}

const contact_area = document.querySelector('.contact_area');

for (const key in contact) {
    const contactKey = contact[key]; 

    const contactHTML = `
        <div class="col-md-4 contact-list">
            <p class="contact-paragraph">
                <iconify-icon icon="${contactKey[2]}"></iconify-icon> ${contactKey[1]}
            </p>
        </div>
    `;

    // Correct way to append HTML
    contact_area.insertAdjacentHTML('beforeend', contactHTML);
}




