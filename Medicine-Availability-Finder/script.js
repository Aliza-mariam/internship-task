/* =========================================================
   MEDICINE AVAILABILITY FINDER
   ========================================================= */


/* ================= MEDICINE DATABASE ================= */

const medicines = [

    {
        name: "Panadol",
        company: "GSK",
        pharmacy: "City Care Pharmacy",
        location: "Main Market",
        stock: 45,
        price: 120,
        status: "Available"
    },

    {
        name: "Paracetamol",
        company: "Sami Pharmaceuticals",
        pharmacy: "Health Plus Pharmacy",
        location: "Station Road",
        stock: 30,
        price: 110,
        status: "Available"
    },

    {
        name: "Brufen",
        company: "Abbott",
        pharmacy: "Care Medical Store",
        location: "City Center",
        stock: 22,
        price: 180,
        status: "Available"
    },

    {
        name: "Ibuprofen",
        company: "Abbott",
        pharmacy: "New Life Pharmacy",
        location: "Green Avenue",
        stock: 28,
        price: 180,
        status: "Available"
    },

    {
        name: "Amoxicillin",
        company: "Getz Pharma",
        pharmacy: "MedCare Pharmacy",
        location: "Model Town",
        stock: 0,
        price: 320,
        status: "Out of Stock"
    },

    {
        name: "Azithromycin",
        company: "Hilton Pharma",
        pharmacy: "City Care Pharmacy",
        location: "Main Market",
        stock: 0,
        price: 290,
        status: "Out of Stock"
    },

    {
        name: "Cetirizine",
        company: "Getz Pharma",
        pharmacy: "Health Plus Pharmacy",
        location: "Station Road",
        stock: 32,
        price: 95,
        status: "Available"
    },

    {
        name: "Loratadine",
        company: "High-Q Pharma",
        pharmacy: "New Life Pharmacy",
        location: "Green Avenue",
        stock: 18,
        price: 140,
        status: "Available"
    },

    {
        name: "Omeprazole",
        company: "Sami Pharmaceuticals",
        pharmacy: "Care Medical Store",
        location: "City Center",
        stock: 15,
        price: 160,
        status: "Available"
    },

    {
        name: "Vitamin C",
        company: "Nutrifactor",
        pharmacy: "New Life Pharmacy",
        location: "Green Avenue",
        stock: 20,
        price: 350,
        status: "Available"
    },

    {
        name: "Aspirin",
        company: "Bayer",
        pharmacy: "City Care Pharmacy",
        location: "Main Market",
        stock: 0,
        price: 100,
        status: "Out of Stock"
    },

    {
        name: "Diclofenac",
        company: "Novartis",
        pharmacy: "Health Plus Pharmacy",
        location: "Station Road",
        stock: 16,
        price: 150,
        status: "Available"
    },

    {
        name: "ORS",
        company: "Ferozsons Laboratories",
        pharmacy: "MedCare Pharmacy",
        location: "Model Town",
        stock: 40,
        price: 80,
        status: "Available"
    },

    {
        name: "Metformin",
        company: "Getz Pharma",
        pharmacy: "Care Medical Store",
        location: "City Center",
        stock: 0,
        price: 130,
        status: "Out of Stock"
    },

    {
        name: "Cough Syrup",
        company: "Searle",
        pharmacy: "New Life Pharmacy",
        location: "Green Avenue",
        stock: 25,
        price: 220,
        status: "Available"
    }

];


/* =========================================================
   SEARCH PAGE ELEMENTS
   ========================================================= */

const searchInput =
    document.getElementById("medicineSearch");

const searchButton =
    document.getElementById("searchButton");

const resultsContainer =
    document.getElementById("medicineResults");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");

const pharmacyFilter =
    document.getElementById("pharmacyFilter");

const availabilityFilter =
    document.getElementById("availabilityFilter");

const searchMessage =
    document.getElementById("searchMessage");

const searchMessageTitle =
    document.getElementById("searchMessageTitle");

const searchMessageText =
    document.getElementById("searchMessageText");


/* =========================================================
   DISPLAY MEDICINES
   ========================================================= */

function displayMedicines(data) {

    if (!resultsContainer) {
        return;
    }

    resultsContainer.innerHTML = "";


    if (data.length === 0) {

        if (noResults) {
            noResults.style.display = "block";
        }

        if (resultCount) {
            resultCount.textContent =
                "0 medicines found";
        }

        return;
    }


    if (noResults) {
        noResults.style.display = "none";
    }


    if (resultCount) {

        resultCount.textContent =
            `${data.length} medicine${data.length > 1 ? "s" : ""} found`;

    }


    data.forEach(function (medicine) {

        const card =
            document.createElement("div");

        card.className =
            "medicine-card";


        const statusClass =
            medicine.status === "Available"
                ? "available"
                : "out";


        card.innerHTML = `

            <div class="medicine-card-top">

                <div class="medicine-image">
                    💊
                </div>

                <span class="status ${statusClass}">
                    ${medicine.status}
                </span>

            </div>


            <h3>
                ${medicine.name}
            </h3>


            <p class="medicine-company">
                ${medicine.company}
            </p>


            <div class="medicine-info">

                <p>
                    🏪 ${medicine.pharmacy}
                </p>

                <p>
                    📍 ${medicine.location}
                </p>

                <p>
                    📦 Stock: ${medicine.stock}
                </p>

            </div>


            <div class="medicine-card-bottom">

                <strong>
                    Rs. ${medicine.price}
                </strong>


                <button
                    class="details-button"
                    onclick="showMedicineDetails('${medicine.name}')">

                    View Details

                </button>

            </div>

        `;


        resultsContainer.appendChild(card);

    });

}


/* =========================================================
   SHOW SEARCH MESSAGE
   ========================================================= */

function showSearchMessage(title, message) {

    if (!searchMessage) {
        return;
    }


    searchMessage.style.display =
        "block";


    if (searchMessageTitle) {

        searchMessageTitle.textContent =
            title;

    }


    if (searchMessageText) {

        searchMessageText.textContent =
            message;

    }

}


/* =========================================================
   HIDE SEARCH MESSAGE
   ========================================================= */

function hideSearchMessage() {

    if (searchMessage) {

        searchMessage.style.display =
            "none";

    }

}


/* =========================================================
   SEARCH MEDICINES
   ========================================================= */

function searchMedicines() {

    if (!searchInput) {
        return;
    }


    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();


    /* Empty search */

    if (searchValue === "") {

        hideSearchMessage();


        if (resultsContainer) {
            resultsContainer.innerHTML = "";
        }


        if (noResults) {
            noResults.style.display = "none";
        }


        if (resultCount) {
            resultCount.textContent =
                "Search for a medicine";
        }


        return;
    }


    /* Find medicine */

    const matchingMedicines =
        medicines.filter(function (medicine) {

            return medicine.name
                .toLowerCase()
                .includes(searchValue);

        });


    /* Medicine not found */

    if (matchingMedicines.length === 0) {

        if (resultsContainer) {
            resultsContainer.innerHTML = "";
        }


        if (noResults) {
            noResults.style.display =
                "block";
        }


        if (resultCount) {
            resultCount.textContent =
                "0 medicines found";
        }


        showSearchMessage(
            "Medicine Not Found",
            `"${searchInput.value}" is not available in our medicine database.`
        );


        return;
    }


    /* =====================================================
       FILTERS
       ===================================================== */

    const pharmacyValue =
        pharmacyFilter
            ? pharmacyFilter.value
            : "all";


    const availabilityValue =
        availabilityFilter
            ? availabilityFilter.value
            : "all";


    const filteredMedicines =
        matchingMedicines.filter(
            function (medicine) {

                const pharmacyMatch =
                    pharmacyValue === "all" ||
                    medicine.pharmacy === pharmacyValue;


                const availabilityMatch =
                    availabilityValue === "all" ||
                    medicine.status === availabilityValue;


                return (
                    pharmacyMatch &&
                    availabilityMatch
                );

            }
        );


    /* No result after filters */

    if (filteredMedicines.length === 0) {

        if (resultsContainer) {
            resultsContainer.innerHTML = "";
        }


        if (noResults) {
            noResults.style.display =
                "block";
        }


        if (resultCount) {
            resultCount.textContent =
                "0 medicines found";
        }


        showSearchMessage(
            "No Matching Result",
            "The medicine was found, but it does not match the selected filters."
        );


        return;
    }


    /* =====================================================
       AVAILABILITY MESSAGE
       ===================================================== */

    const available =
        filteredMedicines.find(
            function (medicine) {

                return medicine.status ===
                    "Available";

            }
        );


    const outOfStock =
        filteredMedicines.find(
            function (medicine) {

                return medicine.status ===
                    "Out of Stock";

            }
        );


    if (available) {

        showSearchMessage(
            "Medicine Available",
            `${available.name} is available at ${available.pharmacy}. Stock: ${available.stock}.`
        );

    }

    else if (outOfStock) {

        showSearchMessage(
            "Out of Stock",
            `${outOfStock.name} is currently out of stock at ${outOfStock.pharmacy}.`
        );

    }


    /* Display searched medicine only */

    displayMedicines(
        filteredMedicines
    );

}


/* =========================================================
   SEARCH BUTTON
   ========================================================= */

if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchMedicines
    );

}


/* =========================================================
   SEARCH WITH ENTER KEY
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchMedicines();

            }

        }
    );

}


/* =========================================================
   PHARMACY FILTER
   ========================================================= */

if (pharmacyFilter) {

    pharmacyFilter.addEventListener(
        "change",
        searchMedicines
    );

}


/* =========================================================
   AVAILABILITY FILTER
   ========================================================= */

if (availabilityFilter) {

    availabilityFilter.addEventListener(
        "change",
        searchMedicines
    );

}


/* =========================================================
   MEDICINE DETAILS
   ========================================================= */

function showMedicineDetails(medicineName) {

    const medicine =
        medicines.find(
            function (item) {

                return item.name ===
                    medicineName;

            }
        );


    if (!medicine) {
        return;
    }


    alert(

        "Medicine: " +
        medicine.name +

        "\n\nCompany: " +
        medicine.company +

        "\nPharmacy: " +
        medicine.pharmacy +

        "\nLocation: " +
        medicine.location +

        "\nStock: " +
        medicine.stock +

        "\nPrice: Rs. " +
        medicine.price +

        "\nStatus: " +
        medicine.status

    );

}


/* =========================================================
   HOME PAGE SEARCH
   =========================================================
   
   IMPORTANT:
   Your original index.html uses:

   <input id="heroSearch">

   <button onclick="searchFromHome()">

   So we use heroSearch here.
   ========================================================= */

const heroSearchInput =
    document.getElementById("heroSearch");


/* =========================================================
   SEARCH FROM HOME PAGE
   ========================================================= */

function searchFromHome() {

    const value =
        heroSearchInput
            ? heroSearchInput.value.trim()
            : "";


    /* Empty search */

    if (value === "") {

        alert(
            "Please enter a medicine name."
        );

        return;
    }


    /* Send medicine name to search page */

    window.location.href =
        "search.html?medicine=" +
        encodeURIComponent(value);

}


/* =========================================================
   HOME PAGE ENTER KEY
   ========================================================= */

if (heroSearchInput) {

    heroSearchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchFromHome();

            }

        }
    );

}


/* =========================================================
   LOAD MEDICINE FROM URL
   ========================================================= */

function loadSearchFromURL() {

    if (!searchInput) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const medicine =
        params.get("medicine");


    if (medicine) {

        searchInput.value =
            medicine;

        searchMedicines();

    }

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
         * Search page par initially
         * koi medicine show nahi hogi.
         */

        if (resultsContainer) {

            resultsContainer.innerHTML = "";

        }


        if (noResults) {

            noResults.style.display =
                "none";

        }


        if (resultCount) {

            resultCount.textContent =
                "Search for a medicine";

        }


        /*
         * Agar Home page se medicine search hui hai,
         * to URL se medicine lekar automatically
         * search karein.
         */

        loadSearchFromURL();

    }
);
