const carBrands = ["Acura", "Audi", "BMW", "Chevrolet", "Citroen", "Ferrari", "Ford", "Honda", "Jaguar", "Volvo"];
const acuraModels = [
    ["ILX", 1000000, [2016],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["MDX", 1200000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["RDX", 1500000, [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["RL", 2000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["RSX", 2500000, [2002, 2003, 2004],
        [
            ["Купе"],
            [1]
        ]
    ],
    ["TL", 4000000, [2002, 2003, 2004, 2005, 2006, 2008],
        [
            ["Седан"],
            [1]
        ]
    ]
];
const audiModels = [
    ["A1", 2500000, [2010, 2011, 2012, 2013, 2014, 2015, 2016],
        [
            ["Хэтчбэк 5 дв."],
            [1]
        ]
    ],
    ["A2", 3000000, [2002, 2004],
        [
            ["Хэтчбэк 5 дв."],
            [1]
        ]
    ],
    ["A3", 4000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["A4", 4500000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Седан", "Универсал"],
            [1, 1.2]
        ]
    ],
    ["A5", 5000000, [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Купе", "Лифтбек"],
            [1, 1.05]
        ]
    ],
    ["A6", 6000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Седан", "Универсал"],
            [1, 1.13]
        ]
    ],
    ["Q3", 3000000, [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Q7", 7000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Q8", 10000000, [2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["TT", 6000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        [
            ["Купе"],
            [1]
        ]
    ]
];
const bmwModels = [
    ["1Series", 2500000, [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Хэтчбэк 3 дв.", "Хэтчбэк 5 дв."],
            [0.98, 1]
        ]
    ],
    ["2Series", 3200000, [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Купе"],
            [1]
        ]
    ],
    ["3Series", 3800000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["4Series", 4300000, [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Купе", "Лифтбек"],
            [1, 1.08]
        ]
    ],
    ["5Series", 5000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Седан", "Универсал"],
            [1, 1.09]
        ]
    ],
    ["6Series", 7000000, [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        [
            ["Купе", "Кабриолет"],
            [1, 1.5]
        ]
    ],
    ["X1", 2900000, [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["X2", 3000000, [2017, 2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["X3", 5000000, [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["X4", 5000000, [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["X5", 7000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["X6", 7500000, [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["X7", 10000000, [2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ]
];
const chevroletModels = [
    ["Aveo", 600000, [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        [
            ["Седан", "Хэтчбэк 5 дв."],
            [1, 1.05]
        ]
    ],
    ["Blaser", 300000, [2004],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Camaro", 6500000, [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Купе"],
            [1]
        ]
    ],
    ["Captiva", 2500000, [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Corvette", 10000000, [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        [
            ["Купе", "Кабриолет"],
            [1, 1.35]
        ]
    ],
    ["Cruze", 600000, [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Седан", "Хэтчбэк 5 дв."],
            [1, 1.08]
        ]
    ],
    ["Lacetti", 500000, [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
        [
            ["Седан", "Хэтчбэк 5 дв."],
            [1.03, 1]
        ]
    ],
    ["Lanos", 200000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["Niva", 1100000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Tahoe", 8000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ]
];
const citroenModels = [
    ["C1", 400000, [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
        [
            ["Хэтчбэк 3 дв.", "Хэтчбэк 5 дв."],
            [0.97, 1]
        ]
    ],
    ["C2", 400000, [2003, 2004, 2005, 2006, 2007, 2008, 2009],
        [
            ["Хэтчбэк 3 дв."],
            [1]
        ]
    ],
    ["C3", 300000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
        [
            ["Кабриолет", "Хэтчбэк 5 дв."],
            [1.25, 1]
        ]
    ],
    ["C4", 300000, [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Седан", "Хэтчбэк 5 дв."],
            [1, 1.05]
        ]
    ],
    ["C5", 400000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
        [
            ["Лифтбек", "Универсал"],
            [1.06, 1]
        ]
    ],
    ["C6", 500000, [2006],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["C8", 600000, [2002, 2003, 2004, 2005, 2006, 2007],
        [
            ["Минивэн / Микроавтобус"],
            [1]
        ]
    ]
];
const ferrariModels = [
    ["458", 20000000, [2011],
        [
            ["Купе"],
            [1]
        ]
    ],
    ["488", 15000000, [2017],
        [
            ["Купе"],
            [1]
        ]
    ],
    ["599", 18000000, [2006, 2009, 2010],
        [
            ["Купе"],
            [1]
        ]
    ],
    ["612", 16000000, [2004],
        [
            ["Купе"],
            [1]
        ]
    ],
    ["California", 12000000, [2009, 2010, 2014, 2015],
        [
            ["Кабриолет"],
            [1]
        ]
    ],
    ["F430", 13000000, [2005, 2007, 2008],
        [
            ["Кабриолет"],
            [1]
        ]
    ],
    ["FF", 12000000, [2011, 2013, 2015],
        [
            ["Хэтчбэк 3 дв."],
            [1]
        ]
    ]
];
const fordModels = [
    ["C-MAX", 200000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        [
            ["Минивэн / Микроавтобус"],
            [1]
        ]
    ],
    ["EcoSport", 600000, [2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Expedition", 100000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2011, 2019],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Fiesta", 300000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Хэтчбэк 3 дв.", "Хэтчбэк 5 дв."],
            [0.975, 1]
        ]
    ],
    ["Focus", 600000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Седан", "Универсал", "Хэтчбэк 3 дв.", "Хэтчбэк 5 дв."],
            [1, 1.02, 0.97, 1.15]
        ]
    ],
    ["Kuga", 1500000, [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["Mondeo", 2000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["Mustang", 7000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Купе", "Кабриолет"],
            [1, 1.17]
        ]
    ]
];
const hondaModels = [
    ["Accord", 1000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["Civic", 1500000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["CR-V", 2000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["HR-V", 2500000, [2002, 2003, 2004, 2005, 2016, 2017, 2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ]
];
const jaguarModels = [
    ["E-Pace", 5500000, [2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["F-Pace", 6500000, [2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["F-Type", 7000000, [2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Купе", "Кабриолет"],
            [1, 1.19]
        ]
    ],
    ["S-Type", 7500000, [2002, 2003, 2004, 2005, 2006, 2007],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["XE", 8000000, [2015, 2016, 2017, 2018, 2019],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["XF", 5500000, [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["XFR", 9000000, [2009, 2010, 2011, 2012, 2013],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["XJ", 8000000, [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        [
            ["Седан", "Седан Long"],
            [1, 1.03]
        ]
    ],
    ["XJR", 10000000, [2007],
        [
            ["Седан"],
            [1]
        ]
    ],
    ["XK", 9000000, [2006, 2007, 2008, 2011, 2012],
        [
            ["Купе"],
            [1]
        ]
    ]
];
const volvoModels = [
    ["C30", 3300000, [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        [
            ["Хэтчбэк 3 дв."],
            [1]
        ]
    ],
    ["C70", 3800000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        [
            ["Кабриолет"],
            [1]
        ]
    ],
    ["V60", 4000000, [2011],
        [
            ["Универсал"],
            [1]
        ]
    ],
    ["V70", 3500000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
        [
            ["Универсал"],
            [1]
        ]
    ],
    ["V90", 4500000, [2017, 2019],
        [
            ["Универсал"],
            [1]
        ]
    ],
    ["XC40", 5000000, [2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["XC60", 6000000, [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["XC70", 6500000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ],
    ["XC90", 8000000, [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        [
            ["Внедорожник 5 дв."],
            [1]
        ]
    ]
];

const carBrandSelect = document.querySelector(".car-brand");
carBrandSelect.addEventListener("change", (e) => {
    const currentSelection = e.currentTarget.value;
    const doesBrandExist = carBrands.some(brand => brand === currentSelection);
    if (!doesBrandExist) return;

    const carModelsData = getCarModelDataByBrand(currentSelection);
    const carModelsNames = carModelsData.map(carData => carData[0]);

    const modelsSelect = document.querySelector(".car-model");
    modelsSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "Модель";
    modelsSelect.appendChild(defaultOption);
    for (let model of carModelsNames) {
        const newOption = document.createElement("option");
        newOption.value = model;
        newOption.innerText = model;
        modelsSelect.appendChild(newOption);
    };

    modelsSelect.disabled = false;
    document.getElementById("mileage").disabled = false;

    const carBodyworkSelect = document.querySelector(".car-bodywork");
    const modificationSelect = document.querySelector(".car-modification");
    carBodyworkSelect.disabled = true;
    modificationSelect.disabled = true;
    carBodyworkSelect.innerHTML = carBodyworkSelect.innerHTML;

    document.getElementById("mileage").value = "";
    document.querySelector(".main__result").innerHTML = "";
    modificationSelect.innerHTML = modificationSelect.innerHTML;

    const yearsSelect = document.querySelector(".car-year");
    yearsSelect.disabled = true;
    yearsSelect.innerHTML = yearsSelect.innerHTML;

});

function getCarModelDataByBrand(brand) {
    let carModelData = [];
    if (brand === "Acura") {
        carModelData = acuraModels;
    } else if (brand === "Audi") {
        carModelData = audiModels;
    } else if (brand === "BMW") {
        carModelData = bmwModels;
    } else if (brand === "Chevrolet") {
        carModelData = chevroletModels;
    } else if (brand === "Citroen") {
        carModelData = citroenModels;
    } else if (brand === "Ferrari") {
        carModelData = ferrariModels;
    } else if (brand === "Ford") {
        carModelData = fordModels;
    } else if (brand === "Honda") {
        carModelData = hondaModels;
    } else if (brand === "Jaguar") {
        carModelData = jaguarModels;
    } else if (brand === "Volvo") {
        carModelData = volvoModels;
    }

    return carModelData;
}
const carModelSelect = document.querySelector(".car-model");
carModelSelect.addEventListener("change", () => {

    const carBodyworkSelect = document.querySelector(".car-bodywork");
    const modificationSelect = document.querySelector(".car-modification");
    const carModel = document.querySelector(".car-model").value;
    const yearsSelect = document.querySelector(".car-year");
    if (carModel === "Модель") {
        document.querySelector(".main__result").innerHTML = "Пожалуйста, выберите модель";
        const yearsSelect = document.querySelector(".car-year");
        yearsSelect.disabled = true;
        carBodyworkSelect.disabled = true;
        modificationSelect.disabled = true;
        carBodyworkSelect.innerHTML = carBodyworkSelect.innerHTML;
        modificationSelect.innerHTML = modificationSelect.innerHTML;
        yearsSelect.innerHTML = yearsSelect.innerHTML;
        return;
    }

    yearsSelect.disabled = false;
    carBodyworkSelect.disabled = true;
    modificationSelect.disabled = true;
    carBodyworkSelect.innerHTML = carBodyworkSelect.innerHTML;

    document.getElementById("mileage").value = "";
    document.querySelector(".main__result").innerHTML = "";
    modificationSelect.innerHTML = modificationSelect.innerHTML;

    const carBrand = document.querySelector(".car-brand").value;
    const carModelData = getCarModelDataByBrand(carBrand);
    const chosenCarModelData = carModelData.find(carData => carData[0] === carModel);

    const carYears = chosenCarModelData[2];

    yearsSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "Год выпуска";
    yearsSelect.appendChild(defaultOption);

    for (let year of carYears) {
        const newOption = document.createElement("option");
        newOption.value = year;
        newOption.innerText = year;
        yearsSelect.appendChild(newOption);
    };


});

const carYearSelect = document.querySelector(".car-year");
carYearSelect.addEventListener("change", () => {
    const carBodyworkSelect = document.querySelector(".car-bodywork");
    const modificationSelect = document.querySelector(".car-modification");
    const carYearSelect = document.querySelector(".car-year").value;

    if (carYearSelect === "Год выпуска") {
        document.querySelector(".main__result").innerHTML = "Пожалуйста, выберите год выпуска";
        carBodyworkSelect.disabled = true;
        modificationSelect.disabled = true;
        carBodyworkSelect.innerHTML = carBodyworkSelect.innerHTML;
        modificationSelect.innerHTML = modificationSelect.innerHTML;
        return;
    }

    carBodyworkSelect.disabled = false;
    modificationSelect.disabled = false;

    const carBrand = document.querySelector(".car-brand").value;
    const carModel = document.querySelector(".car-model").value;

    const carModelData = getCarModelDataByBrand(carBrand);
    const chosenCarModelData = carModelData.find(carData => carData[0] === carModel);

    const carBodywork = chosenCarModelData[3][0];

    carBodyworkSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "Тип кузова";
    carBodyworkSelect.appendChild(defaultOption);

    let i = 0;

    for (let bodywork of carBodywork) {
        const newOption = document.createElement("option");
        newOption.value = chosenCarModelData[3][1][i];
        newOption.innerText = bodywork;
        carBodyworkSelect.appendChild(newOption);
        i++
    };
});


let carPriceCalc = () => {
    let finalPrice;
    let price;
    let mileageValue = document.getElementById("mileage").value;
    const carBrand = document.querySelector(".car-brand").value;
    const carModel = document.querySelector(".car-model").value;
    let bodyworkValue = document.querySelector(".car-bodywork").value;

    const carModelData = getCarModelDataByBrand(carBrand);
    const chosenCarModelData = carModelData.find(carData => carData[0] === carModel);

    if (carBrand == "") {
        document.querySelector(".main__result").innerHTML = "Пожалуйста, выберите марку";
        return;
    }

    if (carModel == "Модель") {
        document.querySelector(".main__result").innerHTML = "Пожалуйста, выберите модель";
        return;
    }


    switch (document.querySelector(".car-year").value) {
        case "2021":
            price = chosenCarModelData[1] * 1;
            break;
        case "2020":
            price = chosenCarModelData[1] * 0.99;
            break;
        case "2019":
            price = chosenCarModelData[1] * 0.98;
            break;
        case "2018":
            price = chosenCarModelData[1] * 0.97;
            break;
        case "2017":
            price = chosenCarModelData[1] * 0.96;
            break;
        case "2016":
            price = chosenCarModelData[1] * 0.95;
            break;
        case "2015":
            price = chosenCarModelData[1] * 0.94;
            break;
        case "2014":
            price = chosenCarModelData[1] * 0.93;
            break;
        case "2013":
            price = chosenCarModelData[1] * 0.92;
            break;
        case "2012":
            price = chosenCarModelData[1] * 0.91;
            break;
        case "2011":
            price = chosenCarModelData[1] * 0.9;
            break;
        case "2010":
            price = chosenCarModelData[1] * 0.89;
            break;
        case "2009":
            price = chosenCarModelData[1] * 0.87;
            break;
        case "2008":
            price = chosenCarModelData[1] * 0.85;
            break;
        case "2007":
            price = chosenCarModelData[1] * 0.83;
            break;
        case "2006":
            price = chosenCarModelData[1] * 0.81;
            break;
        case "2005":
            price = chosenCarModelData[1] * 0.79;
            break;
        case "2004":
            price = chosenCarModelData[1] * 0.77;
            break;
        case "2003":
            price = chosenCarModelData[1] * 0.75;
            break;
        case "2002":
            price = chosenCarModelData[1] * 0.7;
            break;
        case "Год выпуска":
            document.querySelector(".main__result").innerHTML = "Пожалуйста, выберите год выпуска";
            return;
    }

    switch (document.querySelector(".car-modification").value) {
        case "basic":
            price = price * 1;
            break;
        case "medium":
            price = price * 1.25;
            break;
        case "maximal":
            price = price * 1.5;
            break;
        case "":
            price = price * 1;
            break;
    }

    if (bodyworkValue === "Тип кузова") {
        price = price * 1;
    } else {
        price = price * bodyworkValue;
    }


    if (mileageValue == 0 || mileageValue == "" || mileageValue < 0) {
        document.querySelector(".main__result").innerHTML = "Пробег должен быть от 1км"
        return;
    }

    document.querySelector(".main__result").innerHTML = "";
    if (mileageValue < 10000) {
        finalPrice = price;
    } else if (mileageValue >= 10000 && mileageValue < 50000) {
        finalPrice = price * 0.95;
    } else if (mileageValue >= 50000 && mileageValue < 100000) {
        finalPrice = price * 0.9;
    } else if (mileageValue >= 100000 && mileageValue < 200000) {
        finalPrice = price * 0.85;
    } else if (mileageValue >= 200000 && mileageValue < 300000) {
        finalPrice = price * 0.75;
    } else if (mileageValue >= 300000) {
        finalPrice = price * 0.7;
    }

    document.querySelector(".main__result").innerHTML = Math.round(finalPrice) + " рублей";
}

document.querySelector(".main__button").addEventListener("click", carPriceCalc);