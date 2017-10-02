#include <iostream>

std::string sortByStrings( std::string s, std::string t )
{
	int charCount [123];
	int charNum = 0;
	int countOfChar = 0;
	int charNumOfT = 0;
	std::string result = "";

	//initialize the count at each index to zero.
	for ( int i = 0; i < 123; ++i )
		charCount[i] = 0;
    
    /*
      get the ascii number of the character in string s then
      store the count of that character in charCount array
     */ 
	for ( int i = 0; i < s.length(); ++i )
	{
	    charNum = s[i];
	    charCount[charNum]++;
	}

	/*
	  iterate through the string t and get the frequency of that
	  character in string s using the charCount array. Use a second
	  for loop to add all of the frequency of that character in that 
	  position and store the resulting string in the string result.
	  Overall the solution is slightly better than O(n^2). The solution
	  is especially good when string s has no duplicate characters.
	*/
	for ( int i = 0; i < t.length(); ++i )
	{
		charNumOfT = t[i];
		countOfChar = charCount[charNumOfT];
		for ( int j = 0; j < countOfChar; ++j )
			result += t[i];
	}
	return result;
}

int main() 
{
	std::string str1 = "weather";
	std::string str2 = "therapyw";
	std::cout << sortByStrings(str1, str2) << std::endl;
	str1 = "good";
	str2 = "odg";
	std::cout << sortByStrings(str1, str2) << std::endl;
	return 0;
}


