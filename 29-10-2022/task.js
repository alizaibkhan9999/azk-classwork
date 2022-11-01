const array1 = [
    {
        EmployID: "1",
        EmployName: "jzk",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "280000",

        islam: true,

    },

    {
        EmployID: "2",
        EmployName: "AZK",
        EmployCompany: "bitsole",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",
        islam: true,


    },

    {
        EmployID: "3",
        EmployName: "kK",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",


        islam: true,
    },

    {
        EmployID: "4",
        EmployName: "AZK",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",

        islam: false,

    },

    {
        EmployID: "5",
        EmployName: "jk",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",

        islam: false,

    },

    {
        EmployID: "6",
        EmployName: "zK",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",

        islam: true,

    },

    {
        EmployID: "7",
        EmployName: "AK",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",

        islam: true,

    },

    {
        EmployID: "8",
        EmployName: "hK",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",

        islam: true,

    },

    {
        EmployID: "9",
        EmployName: "bK",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",


        islam: true,
    },

    {
        EmployID: "10",
        EmployName: "Ik",
        EmployCompany: "Systems limited",
        EmploycompanyAddress: {
            City: "ISB",
            country: "pakistan"

        },
        EmployAddress: {
            City: "RWP",
            country: "pakistan",

        },
        Employsalary: "200000",

        islam: true,

    },


    2,


]
// console.log(array1.filter(ele => ele.islam == true));
let empobj = {};
array1.forEach(obj => {
    if (obj.EmployName == "Ik") {
        empobj = obj;
        return empobj;
    }
})
console.log(empobj);