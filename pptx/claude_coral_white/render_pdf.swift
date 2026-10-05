import Foundation
import PDFKit
import AppKit
let args = CommandLine.arguments
let input = URL(fileURLWithPath: args[1])
let output = URL(fileURLWithPath: args[2], isDirectory: true)
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
guard let doc = PDFDocument(url: input) else { fatalError("PDF open failed") }
for i in 0..<doc.pageCount {
 guard let page = doc.page(at: i) else { continue }
 let image = page.thumbnail(of: NSSize(width: 1600, height: 900), for: .mediaBox)
 guard let tiff = image.tiffRepresentation, let bitmap = NSBitmapImageRep(data: tiff), let png = bitmap.representation(using: .png, properties: [:]) else { fatalError("render failed") }
 let file = output.appendingPathComponent(String(format: "slide-%02d.png", i+1))
 try png.write(to: file)
 let extracted = page.string ?? ""
 try extracted.write(to: output.appendingPathComponent(String(format:"slide-%02d.txt",i+1)), atomically: true, encoding: .utf8)
}
print("Rendered \(doc.pageCount) pages")
