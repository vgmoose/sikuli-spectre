

import java.io.File;
import java.io.IOException;

import javax.swing.ImageIcon;
import org.sikuli.script.*;

public class CustomRegion extends Region implements Comparable {

	private double simScore;
	private Location target = null;
	SimulatedScreen fakeScreen;

	CustomRegion(String fileName)
	{
	    try {
			fakeScreen = new SimulatedScreen(fileName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    x = 0;
	    y = 0;
	    
	    ImageIcon imageIcon = new ImageIcon(fileName);
	    w = imageIcon.getIconWidth();
	    h = imageIcon.getIconHeight();
	}

	/**
	 * the match score
	 *
	 * @return a decimal value between 0 (no match) and 1 (exact match)
	 */
	public double getScore() {
		return simScore;
	}
	
	public IScreen getScreen()
	{
		return fakeScreen;
	}

	/**
	 * like Pattern.TargetOffset sets the click target by offset relative to the
	 * center
	 *
	 * @param offset
	 */
	public void setTargetOffset(Location offset) {
		target = new Location(getCenter());
		target.translate(offset.x, offset.y);
	}

	/**
	 * like Pattern.TargetOffset sets the click target relative to the center
	 * @param x
	 * @param y
	 */
	public void setTargetOffset(int x, int y) {
		setTargetOffset(new Location(x,y));
	}

	@Override
	public int compareTo(Object o) {
		Match m = (Match) o;
		if (simScore != simScore) {
			return simScore < simScore ? -1 : 1;
		}
		if (x != m.x) {
			return x - m.x;
		}
		if (y != m.y) {
			return y - m.y;
		}
		if (w != m.w) {
			return w - m.w;
		}
		if (h != m.h) {
			return h - m.h;
		}
		if (equals(o)) {
			return 0;
		}
		return -1;
	}
}