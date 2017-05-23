function mainModel() {
    this.data = {
        categories: [{
                title: "Dry Food",
                img: "img/dry.jpg",
                goods: [{
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "10.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg"
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.29$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/wet.jpg"
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg"
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg"
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg"
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg"
                    },
                    {
                        title: "Dry food – 'Brand' (0.2kg)",
                        price: "0.9$",
                        description: "Little description of a good goes here. It could be much wider.",
                        img: "img/dry.jpg"
                    }
                ]
            },
            {
                title: "Wet Food",
                img: "img/wet.jpg",
                goods: []
            },
            {
                title: "Medicines",
                img: "img/meds.jpg",
                goods: []
            },
            {
                title: "Sleeping places",
                img: "img/sleep.jpg",
                goods: []
            },
            {
                title: "Toys",
                img: "img/toys.jpg",
                goods: []
            },
            {
                title: "Brushes",
                img: "img/brush.jpg",
                goods: []
            },
            {
                title: "Accessories",
                img: "img/acs.jpg",
                goods: []
            }

        ]
    }
}

mainModel.prototype.get = function() {
    return this.data;
};