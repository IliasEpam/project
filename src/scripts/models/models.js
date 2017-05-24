export default function mainModel() {
    this.data = {
        categories: [{
                title: "Dry Food",
                img: "img/dry.jpg",
                id: 0,
                goods: [{
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "10.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg",
                        id: 0
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.29$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 1
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/logo.jpg",
                        id: 2
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg",
                        id: 3
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg",
                        id: 4
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg",
                        id: 5
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg",
                        id: 6
                    }
                ]
            },
            {
                title: "Wet Food",
                img: "img/wet.jpg",
                id: 1,
                goods: [{
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "9.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 7
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "5.29$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg",
                        id: 8
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "3.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 9
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 10
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/logo.jpg",
                        id: 11
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 12
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 13
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 14
                    },
                    {
                        title: "Wet food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg",
                        id: 15
                    }
                ]
            },
            {
                title: "Medicines",
                img: "img/meds.jpg",
                id: 2,
                goods: [{
                        title: "Some tablets – 'Brand'",
                        price: "20.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/meds.jpg",
                        id: 16
                    },
                    {
                        title: "Some other tablets – 'Brand'",
                        price: "15.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/logo.jpg",
                        id: 17
                    },
                    {
                        title: "Some more tablets – 'Brand'",
                        price: "10.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/logo.jpg",
                        id: 18
                    }
                ]
            },
            {
                title: "Sleeping places",
                img: "img/sleep.jpg",
                id: 3,
                goods: []
            },
            {
                title: "Toys",
                img: "img/toys.jpg",
                id: 4,
                goods: []
            },
            {
                title: "Brushes",
                img: "img/brush.jpg",
                id: 5,
                goods: []
            },
            {
                title: "Accessories",
                img: "img/acs.jpg",
                id: 6,
                goods: []
            }

        ]
    }
}

mainModel.prototype.get = function() {
    return this.data;
};