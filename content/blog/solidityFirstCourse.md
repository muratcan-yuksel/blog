---
title: On writing my first smart contracts
description: Recently (very, very recently) I started learning about Solidity and smart contracts
---

## A bit of background

Recently (very, very recently) I started learning about Solidity and smart contracts. I'm already working as a front end web developer, so I know JS, ReactJS, VueJS (which is the language used in this blog, well, NuxtJS to be precise but you get the point) alongside with other things. While web development, be it front end, full stack or whatever, is quite interesting, I think this web3 thing is the future. You might as well say, Murat, what the hell you know about the trends in technology and society and so on and I'd say, well, not much, but I see that people are talking about this stuff, and bearing the success of crypto coins in mind, I believe blockchain development might turn out to be quite a good career choice. It's already going mainstream, so it's best to catch the trend. I don't want to look back in a couple of years and say "I wish I'd started writng smart contracts earlier..."

So here I am, learning solidity in my free time, slowly for sure, but better than nothing. As for everyone who has a 9 to 5 job knows, it proves kinda difficult to learn new things after writing code/learning things already all day. Anyway, these days I'm watching this [freecodecamp tutorial](https://www.youtube.com/watch?v=ipwxYa-F1uY&t=12s) by Gregory from Dapp University and I want to document what I've learned as I think writing/teaching is one of the best ways to learn a topic. Also, if I get to connect with some likeminded people, that'll be even better.

## Changing state in contracts

In [remix-IDE](https://remix.ethereum.org/) we wrote the following code:

```
pragma solidity ^0.8.10;

contract Mycontract{
    //enum is enumerated list
    //we create this state enum, and it has 3 parameters as you can see
    //we can choose from these parameters as shown below
enum State {Waiting, Ready, Active}
State public state;


constructor() public{
    state= State.Waiting;
}

//call this function to activate the state
function activate()public{
    state= State.Active;
}

//if I call this after the activate function, it'll return true
//otherwise, it'll return false
function isActive() public view returns(bool){
    return state== State.Active;

}

}
```

I'm not exactly sure why we're doing this, but with the code above, we can change the contract's state. To see that, first I compile the contract, and then deploy it on remix IDE (these can be found on the right side of the IDE). When I click my deployed contract, I can see three buttons saying activate, isActive, and state respectively. If I click `isActive` button, I'll get `false`, as the contract is not activated yet. But when I click on the `activate` button and then reclick on `isActive`, I see a `true` value, meaning that the contract is activated.

## Structs

Check the following snippet out:

```
pragma solidity ^0.8.10;

contract myContract{
    //create an array
    Person[] public people;
    //so that we can see how many items the array has
    uint256 public peopleCount;

    struct Person{
        string _firstName;
        string _lastName;
    }
    function addPerson(string memory _firstName, string memory _lastName)public{
        people.push(Person(_firstName, _lastName));
   peopleCount +=1;
    }

}
```

Here with the struct Person structure, we're defining a person's first and last name. I find it similar to constructors in JS. addPerson function takes two parameters and puses it into Person array, and increments peopleCount by 1 as it turns out there's no way to know about the array's lenght in Solidity.

In my IDE, I'll see addPerson, people, and peopleCount buttons respectively after compile and deploy. I want to add my own name into it. Inside the input next to addPerson button, I write "Murat", "Yüksel" and click the button. Now, if I click on peopleCount, it'll tell me that there's 1 item. To see the item in question, I write 0 (zero) to people button's input. Yeap, it'll return my name (0, as array indexes start with zero).

Now I want to add another name. I'll write "Hermann","Hesse" to addPerson input field. Now, when I check peopleCount, it shows me 2 items, and when I write 1 into the people input, I see Hermann Hesse displayed.

## mapping

Mapping is very similar to structs, we add an id too though. It's been a couple of days since I watched the tutorial, and so I can't really remember the details (this is the reason why I opened this blog). I'll past the code anyway, it results with a very, very similar output.

```
pragma solidity ^0.8.10;

contract myContract{
    //if we don't keep count, we can't know the lenght of the array or whatever
    uint256 public peopleCount;
       //create a mapping, that has a key/value pair
    mapping (uint=> Person) public people;
    //now it's like uint is the id and Person is the record

    struct Person{
        uint _id;
        string _firstName;
        string _lastName;
    }
    function addPerson(string memory _firstName, string memory _lastName)public{
   peopleCount +=1;
   people[peopleCount]= Person(peopleCount,_firstName,_lastName);

    }

}
```
