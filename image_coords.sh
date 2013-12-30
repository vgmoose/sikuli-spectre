# for whatever reason the jar requires Java 6. The below line may need to be adjusted for your operating system to specify 6, as the current is 7
JAVA_PATH=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home/

# the two -D args are to background it
java -Dapple.awt.UIElement=true -Djava.awt.headless=true -jar image_coords.jar "$1" "$2"