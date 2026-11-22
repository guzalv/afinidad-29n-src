import sys, pymupdf
# usage: python3 -I pdf2txt.py IN.pdf OUT.txt  (page markers kept for citations)
doc = pymupdf.open(sys.argv[1])
with open(sys.argv[2], "w") as f:
    for i, p in enumerate(doc, 1):
        f.write(f"\n=== p{i} ===\n{p.get_text()}")
print(len(doc), "pages")
