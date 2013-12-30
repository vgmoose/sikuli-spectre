import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.sikuli.script.*;

public class SimulatedScreen implements IScreen
{
	private BufferedImage image;
	
	public SimulatedScreen(String fileName) throws IOException
	{
		image = ImageIO.read(new File(fileName)); 
	}
	
	public ScreenImage capture(int a, int b, int c, int d)
	{
	    ScreenImage simg = new ScreenImage(new Rectangle(0, 0, image.getWidth(), image.getHeight()), image);
	    return simg;
	}

	@Override
	public ScreenImage capture() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ScreenImage capture(Rectangle arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ScreenImage capture(Region arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Rectangle getBounds() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IRobot getRobot() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Region newRegion(Rectangle arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void showClick(Location arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void showDropTarget(Location arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void showMove(Location arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void showTarget(Location arg0) {
		// TODO Auto-generated method stub
		
	}
}
