import Book from "../types";

const database : Book[] = [
    {
        id: 1,  
        title: "Hello! HTML5 & CSS3",
        page_count: 325,
        image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
        description: "Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages. You'll then take a quick tour through the new APIs: Form Validation, Canvas, Drag & Drop, Geolocation and Offline Applications. You'll also discover how to include video and audio on your pages without plug-ins, and how to draw interactive vector graphics with SVG.",
    },
    {   
        id: 2,
        title: "Essential Guide to Peoplesoft Development and Customization",
        page_count: 1101,
        image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/delia.jpg",
        description: "The Essential Guide to PeopleSoft Development and Customization is an exhaustive, as well as practical, guide that covers PeopleSoft 7.5 and many new features in release 8.0. Both novice and experienced programmers will benefit from the detailed coverage of topics ranging from the basics of Application Designer to the proper use of PeopleCode within the Application Processor.    The book serves as both a reference and a tutorial and covers advanced topics that other books avoid. The reader can gain valuable expertise by following the exercises and building sample applications and utilities."
    },
    {
        id: 3,
        title: "Rails 3 in Action",
        page_count: 425,
        image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/katz.jpg",
        description: "Rails 3 in Action will provide a thorough introduction to Ruby-based web development using Rails. Like Rails 3 itself, this book combines Merb and Rails in the form of authors Yehuda Katz, Merb Lead Developer.",
    },
    {
        id: 4,
        title: "Object Oriented Application Frameworks",
        page_count: 352,
        image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewis2.jpg",
        description: "Frameworks are object-oriented programming environments for vertical application areas. This book is the first to survey this exciting new technology, its concepts, and practical applications.",

    },
    {
        id: 5,
        title: "Clojure in Action",
        page_count: 475,
        image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rathore.jpg",
        description: "Clojure in Action is a hands-on tutorial for the working programmer who has written code in a language like Java or Ruby, but has no prior experience with Lisp. It teaches Clojure from the basics to advanced topics using practical, real-world application examples. Blow through the theory and dive into practical matters like unit-testing, environment set up, all the way through building a scalable web-application using domain-specific languages, Hadoop, HBase, and RabbitMQ.",
    },
    {
        id: 6,
        title: "Dependency Injection in .NET",
        page_count: 375,
        image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/seemann.jpg",
        description: "Dependency Injection in .NET is a comprehensive guide than introduces DI and provides an in-depth look at applying DI practices to .NET apps. In it, you will also learn to integrate DI together with such technologies as Windows Communication Foundation, ASP.NET MVC, Windows Presentation Foundation and other core .NET components.",
    }



]

export default database
