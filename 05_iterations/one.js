for (let index = 0; index < 7; index++) {
    const element = index;
    console.log(element)
}

for (let index = 0; index < 10; index++) {

    // console.log(index);
    // for (let i = 0; i < index; i++) {
    //     const element = array[i];
        
    // }

    const element = 'x'
    console.log(element.repeat(index));    
}

const months_array = [
    "January 1995", "February 1995", "March 1995", "April 1995", "May 1995", "June 1995",
    "July 1995", "August 1995", "September 1995", "October 1995", "November 1995", "December 1995",
    "January 1996", "February 1996", "March 1996", "April 1996", "May 1996", "June 1996",
    "July 1996", "August 1996", "September 1996", "October 1996", "November 1996", "December 1996",
    "January 1997", "February 1997", "March 1997", "April 1997", "May 1997", "June 1997",
    "July 1997", "August 1997", "September 1997", "October 1997", "November 1997", "December 1997",
    "January 1998", "February 1998", "March 1998", "April 1998", "May 1998", "June 1998",
    "July 1998", "August 1998", "September 1998", "October 1998", "November 1998", "December 1998",
    "January 1999", "February 1999", "March 1999", "April 1999", "May 1999", "June 1999",
    "July 1999", "August 1999", "September 1999", "October 1999", "November 1999", "December 1999",
    "January 2000", "February 2000", "March 2000", "April 2000", "May 2000", "June 2000",
    "July 2000", "August 2000", "September 2000", "October 2000", "November 2000", "December 2000",
    "January 2001", "February 2001", "March 2001", "April 2001", "May 2001", "June 2001",
    "July 2001", "August 2001", "September 2001", "October 2001", "November 2001", "December 2001",
    "January 2002", "February 2002", "March 2002", "April 2002", "May 2002", "June 2002",
    "July 2002", "August 2002", "September 2002", "October 2002", "November 2002", "December 2002",
    "January 2003", "February 2003", "March 2003", "April 2003", "May 2003", "June 2003",
    "July 2003", "August 2003", "September 2003", "October 2003", "November 2003", "December 2003",
    "January 2004", "February 2004", "March 2004", "April 2004", "May 2004", "June 2004",
    "July 2004", "August 2004", "September 2004", "October 2004", "November 2004", "December 2004",
    "January 2005", "February 2005", "March 2005", "April 2005", "May 2005", "June 2005",
    "July 2005", "August 2005", "September 2005", "October 2005", "November 2005", "December 2005",
    "January 2006", "February 2006", "March 2006", "April 2006", "May 2006", "June 2006",
    "July 2006", "August 2006", "September 2006", "October 2006", "November 2006", "December 2006",
    "January 2007", "February 2007", "March 2007", "April 2007", "May 2007", "June 2007",
    "July 2007", "August 2007", "September 2007", "October 2007", "November 2007", "December 2007",
    "January 2008", "February 2008", "March 2008", "April 2008", "May 2008", "June 2008",
    "July 2008", "August 2008",    "September 2008", "October 2008", "November 2008", "December 2008", "January 2009", "February 2009", "March 2009", "April 2009", "May 2009", "June 2009",
    "July 2009", "August 2009", "September 2009", "October 2009", "November 2009", "December 2009",
    "January 2010", "February 2010", "March 2010", "April 2010", "May 2010", "June 2010",
    "July 2010", "August 2010", "September 2010", "October 2010", "November 2010", "December 2010",
    "January 2011", "February 2011", "March 2011", "April 2011", "May 2011", "June 2011",
    "July 2011", "August 2011", "September 2011", "October 2011", "November 2011", "December 2011",
    "January 2012", "February 2012", "March 2012", "April 2012", "May 2012", "June 2012",
    "July 2012", "August 2012", "September 2012", "October 2012", "November 2012", "December 2012",
    "January 2013", "February 2013", "March 2013", "April 2013", "May 2013", "June 2013",
    "July 2013", "August 2013", "September 2013", "October 2013", "November 2013", "December 2013",
    "January 2014", "February 2014", "March 2014", "April 2014", "May 2014", "June 2014",
    "July 2014", "August 2014", "September 2014", "October 2014", "November 2014", "December 2014",
    "January 2015", "February 2015", "March 2015", "April 2015", "May 2015", "June 2015",
    "July 2015", "August 2015", "September 2015", "October 2015", "November 2015", "December 2015",
    "January 2016", "February 2016", "March 2016", "April 2016", "May 2016", "June 2016",
    "July 2016", "August 2016", "September 2016", "October 2016", "November 2016", "December 2016",
    "January 2017", "February 2017", "March 2017", "April 2017", "May 2017", "June 2017",
    "July 2017", "August 2017", "September 2017", "October 2017", "November 2017", "December 2017",
    "January 2018", "February 2018", "March 2018", "April 2018", "May 2018", "June 2018",
    "July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018",
    "January 2019", "February 2019", "March 2019", "April 2019", "May 2019", "June 2019",
    "July 2019", "August 2019", "September 2019", "October 2019", "November 2019", "December 2019",
    "January 2020", "February 2020", "March 2020", "April 2020", "May 2020", "June 2020",
    "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020",
    "January 2021", "February 2021", "March 2021", "April 2021", "May 2021", "June 2021",
    "July 2021", "August 2021", "September 2021", "October 2021", "November 2021", "December 2021",
    "January 2022", "February 2022", "March 2022", "April 2022", "May 2022", "June 2022",
    "July 2022", "August 2022", "September 2022", "October 2022", "November 2022", "December 2022",
    "January 2023", "February 2023", "March 2023", "April 2023", "May 2023", "June 2023",
    "July 2023", "August 2023"
]



for (let index = 0; index < months_array.length; index++) {

    // console.log(index);

    if(index === months_array.length - 1){
        console.log(`Your current age is ${index} months & in years it is ${index/12} years`);
        
    }
    
}

for (let i = 0; i < 10; i++) {
    console.log(`Current output is ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);        
    }    
}

const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];



const currentYear = new Date().getFullYear();
const last10Years = Array.from({ length: 10 }, (_, index) => currentYear - index);
console.log(last10Years);

for (let years = 0; years < last10Years.length; years++) {
    const yearCount = last10Years[years]
    console.log(`FOR YEAR :::::::::: ${yearCount}`)
    for (let month = 0; month < months.length; month++) {
        const monthCount = months[month]
        console.log(`${monthCount} ${yearCount}`);        
    }
} 