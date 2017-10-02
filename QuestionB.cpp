#include <iostream>

/*
Program does not work. Ran out of time to complete it. See below for the 
idea of the solution that was going to be implemented for this exercise.
*/

int hashFunction( std::string str )
{
	int index = str[0];
	return index;
}

std::string removeBeginningOfURL( std::string url )
{
	//removes the protocol and the www portion of the URL
	return url[10] == '.' ? url.substr( 11 ) : url.substr( 12 );
}

std::string removeStrBetweenSlashes( std::string str, std::string domain[] )
{   
	std::string domainStr = "";
	int indexToStoreDom = 0;
    for ( int i = 1; i < str.length(); ++i ) {
    	if ( str[i] == '/' ) { 
           domainStr = str.substr( 1, i - 1 );
           indexToStoreDom = hashFunction( domainStr );
           domain[indexToStoreDom] = domainStr;
           return str.substr( i - 1 );
        }
    }       
    /* 
      the string doesnt have another back slacklash and therefore
      entire string is domain.
    */
    indexToStoreDom = hashFunction( str );
    domain[indexToStoreDom] = str;
    return "";  
}

//This function is responsible for parsing the url into it's components. 
std::string parseURL( std::string url, std::string domain[], 
	                                   std::string lastWordOfURLPath[] )
{
    //add a back slash to the url for the function removeStrBetweenSlashes
    url = "/" + removeBeginningOfURL( url );
    url = removeStrBetweenSlashes( url, domain );
    return url;
}

std::string getLastWordInURLPath( std::string str, std::string lastWordOfURLPath[] ) 
{
     int index = 0;
     std::string word = "";
     for ( int i = str.length() - 1; i >= 0; --i )
     {
     	if ( str[i] == '/' )
     	{
            word = str.substr( i + 1 );
            index = hashFunction( word );
            lastWordOfURLPath[index] = word;
            return str.substr( 0, i + 1 );
     	}
     }
     return str;
}

bool checkIfVisited( std::string url )
{
    return false;
}

int main() 
{
	//3 test cases
	std::string domain[123];
	std::string lastWordOfURLPath[123];
	std::string url1 = "http://www.surveymonkey.com/r/TTPChallenge2";
	std::string url2 = "https://www.facebook.com/radesh.shiwlochan";
	std::string url3 = "http://www.surveymonkey.com/r/TTPChallenge2";
	return 0;
}

/*
EXPLANATION: This program is a very small test case of a real world application. 
When a web crawler visits a page it would use a hashmap data structure to store 
the domain of the URL and store the last 3 to 4 words in the URL path. When the 
crawler needs to determine whether it should visit another web page, it compares 
the domain of pages it has visited to the one it should visit using the hashmap 
to retrieve the domain string of the website it wants to visit to the ones that 
is stored. If the domain of the web page the crawler wants to visit does not 
match any of the ones that the crawler visited, then the crawler proceeds to visit
the page. If the domain do match, a comparsion is done between the last 3 - 4 words of
the web page that the crawler wants to visit to the web pages that the crawler previously
visited. If the last 3 - 4 words do not match of the new webpage does not match any words
that was were previously visited then the web crawler can proceed to visit the web page.

A hash map is an efficient data structure for solving this problem. It allows for quick 
retrieval of words stored that the web crawler already visited. By storing the domains 
and selective words in the last part of the URL path, this saves the amount of memory 
that the program uses to store the URL of the webpages that were already visited. 
*/







