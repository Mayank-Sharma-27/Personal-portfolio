# Composition vs Inheritance in cricket terms

Ever since I was a child, I have always tried to understand complex stuff in a way I understood. I remember in college I was unable to understand how, in thermodynamics, the work done on the system is positive and the work done by the system is negative. I created an analogy on how I would understand this, which may be a story for a different day. I also tried explaining SOLID principles in cricket terms in one of my blogs here.

In this blog, I will try to explain “Why Composition is Better Than Inheritance,” a common interview question. I will try to break this down into cricketing terms so that all the cricket fans out there can easily understand it. We will also try to understand how abstraction works well with composition.

### The Cricket Game Analogy

Let’s imagine we’ve been hired to create a cricket game. In this game, we need to design different players with various skills. Some players excel at batting, some at bowling, others are exceptional fielders, and some, well, are good for nothing (not pointing fingers at anyone from the 2019 World Cup final!).

### Understanding Inheritance

While doing the low-level design, if we start by creating a base class player and all the other players inherit from this base class, our code would look something like this: Each player can bat, bowl, and field.

```java
class Player {
    public String name;
    public int age;

    void bat() {
        System.out.println("Default Batting");
    }

    void bowl() {
        System.out.println("Default Bowling");
    }

    void field() {
        System.out.println("Default Fielding");
    }

    void keep() {
        System.out.println("Default Keeping");
    }
}

```

Let us say we create a Player class which have the default implementation of batting and bowling for a player. But during the game a batter can do multiple things such as play straight, run, play an aggressive shot or defend(There are some batters who can only play one shot but thats not in scope for today). In that case we either keep on adding more functions to the player method or add a subclass Batter which extends the Player class.

**Why can’t we add those skills to player class?**

When we want to add a new ability, we have to keep modifying this class over and over. If our game becomes popular, this class could become very large and hard to manage. So, it’s smarter for us to give each class just one specific job or ability to keep things organised and manageable. 

```java
public class Batter extends Player {
    public Batter(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void playStraight() {
        System.out.println("Batter played a straight drive");
    }
}

public class Bowler extends Player {
    public Bowler(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void bowlOffSpin() {
        System.out.println("Bowler is bowling off spin");
    }
}

```

The problem with this approach is that when an object is created during the game, the functionality will be locked in to the player throughout the game, which is not correct as the batter might need to bowl or field at a different point in the game. For example, what if the batter wants to bowl off spin or that batter, like our ASHanna, has a random skill that they developed?

Let us say we create a Batter like this,

```java
Batter batter = new Batter("Virat, "35");
```

When we create a batter in the game their type cannot be changed at runtime, this means if we want them to take a catch or maybe bowl a little we wont be able to do it. We can add default methods such as take a catch or default bowling in the Batter class but again that would make our code messy and violate Single Responsibility Principle.

### Problems with Inheritance

1. **Rigid Structure:** Changing the base class impacts all subclasses. If we modify how `bowl()` works, it affects batsmen, even though they don't bowl. Also with the game evolving we want the batters and bowlers to keep on adding more skills which will be hard in that case as we will keep on touching the existing classes.
2. In the above approach if we want common behaviours among the subclasses like Batter, Bolwer need a similar method we might have to implement in both the classes.
3. Violation of the Single Responsibility Principle: Each class should have a single responsibility. In this case, the Player subclasses are responsible for both player attributes (like name and age) and player actions (like batting and bowling). This can make the classes harder to maintain and extend.

### Composition

Now, let's talk about how we can resolve this issue using composition and how will it be helpful here.

### Defining Skills

First, we create separate skills for bowling batting and fielding and keeping. Let us say a player like virat kohli plays straightDrive very well, we will have specific implementation of StraightDrive for that player. Some players are good at some shots while other like(the one who lost us the 2023 final) are good at no shot . 

```java
interface BattingSkill {
    void playShot();
}

interface BowlingSkill {
    void bowl();
}

interface FieldingSkill {
    void field();
}

interface KeepingSkill {
    void keep();
}

class CoverDriveSkill implements BattingSkill {
    public void playShot() {
        System.out.println("Plays a good cover drive");
    }
}

class StraightDriveSkill implements BattingSkill {
    public void playShot() {
        System.out.println("Plays a straight drive");
    }
}

class BowlerSkill implements BowlingSkill {
    public void bowl() {
        System.out.println("Bowls well");
    }
}

class FielderSkill implements FieldingSkill {
    public void field() {
        System.out.println("Fields well");
    }
}

class KeeperSkill implements KeepingSkill {
    public void keep() {
        System.out.println("Keeps well");
    }
}

```

The advantage of this approach is that let us say tomorrow some new type of bowling skill is developed, or there is some new shot which people start playing we can just implement the new skill. 

**Why can’t we just add the new bowling skill to the Bowler class?**

This would violate Open closed principle which says that classes should be open of extension but closed for modifications.

### Building Players with Composition

Next, we create players by giving them the skills they need:

```java
import java.util.ArrayList;
import java.util.List;

class Player {
    private String name;
    private List<BattingSkill> battingSkills = new ArrayList<>();
    private List<BowlingSkill> bowlingSkills = new ArrayList<>();
    private FieldingSkill fieldingSkill;
    private KeepingSkill keepingSkill;

    public Player(String name) {
        this.name = name;
    }

    public void addBattingSkill(BattingSkill battingSkill) {
        this.battingSkills.add(battingSkill);
    }

    public void addBowlingSkill(BowlingSkill bowlingSkill) {
        this.bowlingSkills.add(bowlingSkill);
    }

    public void setFieldingSkill(FieldingSkill fieldingSkill) {
        this.fieldingSkill = fieldingSkill;
    }

    public void setKeepingSkill(KeepingSkill keepingSkill) {
        this.keepingSkill = keepingSkill;
    }

    public void bat() {
        if (!battingSkills.isEmpty()) {
            for (BattingSkill battingSkill : battingSkills) {
                battingSkill.playShot();
            }
        } else {
            System.out.println(name + " cannot bat.");
        }
    }

    public void bowl() {
        if (!bowlingSkills.isEmpty()) {
            for (BowlingSkill bowlingSkill : bowlingSkills) {
                bowlingSkill.bowl();
            }
        } else {
            System.out.println(name + " cannot bowl.");
        }
    }

    public void field() {
        if (fieldingSkill != null) fieldingSkill.field();
        else System.out.println(name + " cannot field.");
    }

    public void keep() {
        if (keepingSkill != null) keepingSkill.keep();
        else System.out.println(name + " cannot keep.");
    }
}

```

### Example: Making Our Players

Now, let's create a bowler and an all-rounder:

```java
public class CricketGameComposition {
    public static void main(String[] args) {
        Player batsman = new Player("Virat");
        batsman.addBattingSkill(new CoverDriveSkill());
        batsman.setFieldingSkill(new FielderSkill());

        Player bowler = new Player("Bumrah");
        bowler.addBowlingSkill(new BowlerSkill());
        bowler.addBattingSkill(new StraightDriveSkill()); // Most bowlers can bat a bit
        bowler.setFieldingSkill(new FielderSkill());

        System.out.println("Bowler's actions:");
        bowler.bat(); // Bats a bit
        bowler.field(); // Fields well
        bowler.bowl(); // Bowls well

        Player allRounder = new Player("Ben Stokes");
        allRounder.addBattingSkill(new CoverDriveSkill());
        allRounder.addBowlingSkill(new BowlerSkill());
        allRounder.setFieldingSkill(new FielderSkill());

        System.out.println("\nAll-Rounder's actions:");
        allRounder.bat(); // Bats well
        allRounder.field(); // Fields well
        allRounder.bowl(); // Bowls well
    }
}

```

In the above example we see that the class Player has their own implementation of batting, bowling and fielding skills. Please note that these are just examples in real life projects the implementations will be very different.

Let us say we create a Player class which have the default implementation of batting and bowling for a player. But during the game a batter can do multiple things such as play straight, run, play an aggressive shot or defend(There are some batters who can only play one shot but thats not in scope for today). In that case we either keep on adding more functions to the player method or add a subclass Batter which extends the Player class.

**Why can’t we add those skills to player class?**

When we want to add a new ability, we have to keep modifying this class over and over. If our game becomes popular, this class could become very large and hard to manage. So, it’s smarter for us to give each class just one specific job or ability to keep things organised and manageable. 

### Conclusion

By using composition, we can create flexible, maintainable code that allows players to have different combinations of skills. This approach adheres to the Single Responsibility Principle and the Open-Closed Principle, making our design robust and easy to extend.

Inheritance can lead to a rigid structure that's hard to manage and extend. Composition, on the other hand, provides flexibility and makes it easier to manage and extend our codebase as new requirements emerge.

Schedule a mock System Design Interview with me : [https://www.meetapro.com/provider/listing/160769](https://www.meetapro.com/provider/listing/160769)

Linkedin: [https://www.linkedin.com/in/mayank-sharma-2002bb10b/](https://www.linkedin.com/in/mayank-sharma-2002bb10b/)