String("1");
var str = "hello";
var obj = {
    "id": 123,
    "name": "andrea",
    "age": 29,
    "happy": true,
    "language": {
        "speach": "korean",
        "programming": "javascript"
    }
};
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
