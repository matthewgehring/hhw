const data = [
    {"id": 1,
    "properties":
        {
        "Num": "SF1000",
        "UN":"1234",
        "Type":"Organic Base",
        "Size":"55",
        "Date": new Date()
        }
    },
    {"id": 2,
    "properties":
        {
        "Num": "SF1001",
        "UN":"1334",
        "Type":"Organic Acid",
        "Size":"55",
        "Date": new Date()
        }
    },
    {"id": 3,
    "properties":
        {
        "Num": "SF1002",
        "UN":"2222",
        "Type":"Organic Poison",
        "Size":"55",
        "Date": new Date()
        }
    },
    {"id": 4,
    "properties":
        {
        "Num": "SF1003",
        "UN":"4444",
        "Type":"Hypochlorite",
        "Size":"55",
        "Date": new Date()
        }
    }  
]


const drumsList = (req, res) => {
    //const {id} = req.params;
    res.json(data);
};

const addDrum = (req, res) => {
    const {drumNumber, drumType, date, type, size} = req.body;
    data.push(
        {"id": 4,
        "properties":
            {
            "Num": drumNumber,
            "UN":"4444",
            "Type": drumType,
            "Size": size,
            "Date": date
            }
        })
}

export { drumsList, 
        addDrum};