// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


//for effect when player clear one stage
class Particle
{
    constructor(center_x, center_y, acc = 0)
    {
        this.position = new Vec2(center_x, center_y);
        this.velocity = new Vec2(1, 0);
        const speed = random(3, 9);
        const direction = random(TWO_PI);
        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
        this.gravity = new Vec2(0, 0.3);
        this.accel = acc;
    }

    accelerate()
    {
        this.velocity.addTo(this.accel);
    }

    update()
    {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }

    draw()
    {
        noStroke();
        fill(255, 255, 200);
        beginShape();
        vertex(this.position.x - 8, this.position.y - 3);
        vertex(this.position.x + 8, this.position.y - 3);
        vertex(this.position.x - 5, this.position.y + 6);
        vertex(this.position.x, this.position.y - 8);
        vertex(this.position.x + 5, this.position.y + 6);
        endShape(CLOSE);
    }
}

