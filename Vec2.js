// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


class Vec2
{
    constructor(x=0, y=0)
    {
        this.x = x;
        this.y = y;
    }

    getAngle()
    {
        const angle = atan2(this.y, this.x);
        return angle;
    }

    setAngle(angle_in_radians)
    {
        const length = this.getLength();
        this.x = cos(angle_in_radians) * length;
        this.y = sin(angle_in_radians) * length;
    }

    getLength()
    {
        const length = sqrt(this.x * this.x + this.y * this.y);
        return length;
    }

    setLength(length)
    {
        const angle_in_radians = this.getAngle();
        this.x = cos(angle_in_radians) * length;
        this.y = sin(angle_in_radians) * length;
    }

    add(v2)
    {
        const new_x = this.x + v2.x;
        const new_y = this.y + v2.y;
        return new Vec2(new_x, new_y);
    }

    addTo(v2)
    {
        this.x += v2.x;
        this.y += v2.y;
    }

    subtract(v2)
    {
        const new_x = this.x - v2.x;
        const new_y = this.y - v2.y;
        return new Vec2(new_x, new_y);
    }

    subtractFrom(v2)
    {
        this.x -= v2.x;
        this.y -= v2.y;
    }

    multiply(scalar)
    {
        const new_x = scalar * this.x;
        const new_y = scalar * this.y;
        return new Vec2(new_x, new_y);
    }


    multiplyBy(scalar)
    {
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar)
    {
        const new_x = this.x / scalar;
        const new_y = this.y / scalar;
        return new Vec2(new_x, new_y);
    }

    divideBy(scalar)
    {
        this.x /= scalar;
        this.y /= scalar;
    }
}