import org.sikuli.script.FindFailed;
import org.sikuli.script.Match;
import org.sikuli.script.Settings;

public class image_coords 
{
	public static void main(String[] args)
	{
		String sourceImage, targetImage;
		Settings.InfoLogs = false;

		if (args.length < 2)
		{		
			System.out.println("Usage:\n\tjava -jar image_coords.jar [sourceImage] [targetImage]");
			System.exit(0);
		}

		sourceImage = args[0];
		targetImage = args[1];

		CustomRegion htmlPage = new CustomRegion(sourceImage);

		try{
			Match match = htmlPage.find(targetImage);

			int xCoor = (match.getX()+match.getW()/2);
			int yCoor = (match.getY()+match.getH()/2);

			System.out.println(xCoor + ", " + yCoor);
		}
		catch(FindFailed e){
			System.out.println("Not Found");
		}
	}
}
