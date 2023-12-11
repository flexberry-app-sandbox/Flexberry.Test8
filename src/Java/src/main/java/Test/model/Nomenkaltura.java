package Test.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Номенкалтура
 */
@Entity(name = "IISTestНоменкалтура")
@Table(schema = "public", name = "Номенкалтура")
public class Nomenkaltura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номенклатура")
    private String номенклатура;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontraagenty")
    @Convert("Kontraagenty")
    @Column(name = "Контраагенты", length = 16, unique = true, nullable = false)
    private UUID _kontraagentyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontraagenty", insertable = false, updatable = false)
    private Kontraagenty kontraagenty;


    public Nomenkaltura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНоменклатура() {
      return номенклатура;
    }

    public void setНоменклатура(String номенклатура) {
      this.номенклатура = номенклатура;
    }


}