from bs4 import BeautifulSoup
from urllib.request import urlopen
import urllib.request, urllib.parse, urllib.error
import ssl
import re
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# creating a pdf downloader function
def download_file(download_url, filename):
    response = urllib.request.urlopen(download_url)
    file = open(filename + ".pdf", 'wb')
    file.write(response.read())
    file.close()

url = "https://hymns.countedfaithful.org/numberListing.php"
page = urlopen(url) # open the page
html = page.read().decode("utf-8") # read the html content of the page
soup = BeautifulSoup(html, 'html.parser') # precursor for getting the href tags containing all links
tags = soup('a'), soup('img')# extracting all anchor tags

# fh.write(str(tags[2]))
hymn_numbers = []
hymn_links = []
for hymn_link_tag in tags[0]: # iterating through all anchor tags
    hymn_link = str(hymn_link_tag.get("href", None))
    hymn_link = hymn_link.strip()
    if hymn_link.endswith(".pdf"): 
        hymn_number = re.findall(r'hymnpdfs/hymn(.+?)\.pdf', hymn_link)
        hymn_numbers.append(hymn_number[0])
        hymn_links.append(hymn_link)

final_titles = []
for title_tag in tags[1]:
    title = str(title_tag.get("title", None)) # getting each title 
    title = title.strip()
    if title.startswith("Click to open pdf for the hymn:"):
        final_title = "_".join(title.split(":")[1].strip().split())
        final_titles.append(final_title)

# Ensure all lists have the same length
assert len(hymn_links) == len(hymn_numbers) == len(final_titles), "Mismatch in lengths of extracted data"

# download all the hymns and name the files appropriately 

for hymn_number, hymn_title, hymn_link in zip(hymn_numbers, final_titles, hymn_links):
    download_file(download_url=hymn_link, filename=hymn_number + "_" + hymn_title)


'''
# Create the JSON objects
hymns_json = []
for hymn_number, hymn_title, hymn_link in zip(hymn_numbers, final_titles, hymn_links):
    hymns_json.append({
        "hymn_number": hymn_number,
        "hymn_title": hymn_title,
        "hymn_link": hymn_link
    })

# Write the JSON to a file
with open("hymns_json.txt", 'w') as fh:
    json.dump(hymns_json, fh, indent=4)
print(f"Extracted {len(hymns_json)} hymns.")

hymns_json2 = []
for hymn_number, hymn_title, hymn_link in zip(hymn_numbers, final_titles, hymn_links):
    hymns_json2.append({
        "number_and_title": hymn_number + "_" + hymn_title,
        "hymn_link": hymn_link
    })
with open("hymns_json2.txt", 'w') as fh2:
    json.dump(hymns_json2, fh2, indent=4)
print(f"Extracted {len(hymns_json2)} hymns.")
'''

